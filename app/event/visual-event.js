/* globals window */
import Config from '../config/config';
import MatchTool from '../match/match';
import steplizePoint from '../tools/steplize';
import {
    scaleReverse
} from '../tools/scalelize';
import move from './move';
import deleteObj from './delete';

const Event = self => {
    const canvas = self.canvas;
    let mousedownPos = [];
    let hoveredObj = [];
    let mousedown = false;
    const step = self.options.grid.step;
    const events = {
        ctrl: false,
        shift: false,
        alt: false,
    };


    const uniqueArr = arr => {
        const result = [];
        const hash = {};
        for (let i = 0, elem;
            (elem = arr[i]) != null; i++) {
            if (!hash[elem]) {
                result.push(elem);
                hash[elem] = true;
            }
        }
        return result;
    };


    window.addEventListener('mousedown', e => {
        mousedown = true;
        let x = e.offsetX;
        let y = e.offsetY;
        [x, y] = scaleReverse([
            [x, y],
        ], self.options.grid.scale)[0];

        if (e.target !== canvas) {
            x = -9999;
            y = -9999;
        }
        const eventType = 'mousedown';
        const multichose = events.shift;
        hoveredObj = MatchTool.match([x, y], self.sys.objects, eventType, multichose);

        if (!events.shift) {
            self.sys.pickupedObjs = [];
        }

        if (hoveredObj.length >= 1) {
            let hObj = hoveredObj[0].object;
            let pathSnapshoot;
            let outBoxSnapshoot;
            switch (hoveredObj[0].object.type) {
                case Config.objectTypes.line:
                case Config.objectTypes.polygon:
                case Config.objectTypes.curve:
                case Config.objectTypes.textGroup:
                    pathSnapshoot = hObj.path;
                    break;
                case Config.objectTypes.text:
                case Config.objectTypes.circle:
                case Config.objectTypes.image:
                    pathSnapshoot = hObj.center;
                    break;
                case Config.objectTypes.arc:
                    pathSnapshoot = hObj.center;
                    outBoxSnapshoot = JSON.parse(JSON.stringify(hObj.sys.outBox));
                    break;
                default:
                    break;
            }
            pathSnapshoot = JSON.parse(JSON.stringify(pathSnapshoot));

            self.sys.pickupedObjs.push({
                pathSnapshoot,
                outBoxSnapshoot,
                origin: hoveredObj[0],
            });

            let oneObj = true;
            if (self.sys.pickupedObjs.length > 1) {
                let indexs = self.sys.pickupedObjs.map(obj => {
                    if (obj.origin.object.id !== self.sys.pickupedObjs[0].origin.object.id) {
                        oneObj = false;
                    } else {
                        return obj.origin.index;
                    }
                });
                indexs = uniqueArr(indexs);
                if (oneObj) {
                    self.sys.pickupedObjs.forEach(obj => {
                        obj.origin.object.isActive.indexs = indexs;
                    });
                }
            }

            mousedownPos = scaleReverse([
                [e.pageX, e.pageY],
            ], self.options.grid.scale)[0];
        }
        self.draw();
    });

    window.addEventListener('mousemove', e => {
        let x = 0;
        let y = 0;

        if (self.sys.pickupedObjs.length === 0) {
            x = e.offsetX;
            y = e.offsetY;
            [x, y] = scaleReverse([
                [x, y],
            ], self.options.grid.scale)[0];
            if (e.target !== canvas) {
                x = -999;
                y = -999;
            }
            const eventType = 'mousedown';
            const multichose = events.shift;
            hoveredObj = MatchTool.match([x, y], self.sys.objects, eventType, multichose);
        } else {
            if (mousedownPos.length > 0 && mousedown) {
                x = e.pageX;
                y = e.pageY;
                [x, y] = scaleReverse([
                    [x, y],
                ], self.options.grid.scale)[0];
                let movedPos = [x - mousedownPos[0], y - mousedownPos[1]];
                movedPos = steplizePoint(movedPos, step);
                self.sys.pickupedObjs.forEach(obj => {
                    const snapShootPath = obj.pathSnapshoot;
                    // console.log('obj', obj);
                    const moveObject = obj.origin;
                    if (events.ctrl || events.alt) {
                        moveObject.type = 'object';
                    }
                    if (moveObject.object.userSet.dragable) {
                        move(obj, movedPos, step);
                    }
                });
            }
            e.preventDefault();
        }
        self.draw();
    });

    window.addEventListener('mouseup', () => {
        mousedown = false;
        if (events.shift) {
            if (self.sys.pickupedObjs.length > 1) {
                const a = self.sys.pickupedObjs[0];
                let oneObj = true;
                const indexs = self.sys.pickupedObjs.map((obj) => {
                    if (a.origin.object.id !== obj.origin.object.id) {
                        oneObj = false;
                    }
                    return obj.origin.index;
                });

                const uniIndexs = uniqueArr(indexs);
                if (oneObj) {
                    a.origin.object.emit('finish', {
                        object: a.origin.object,
                        indexs: uniIndexs,
                        type: 'multichose',
                    });
                }
            }
        } else {
            if (self.sys.pickupedObjs.length === 1) {
                self.sys.pickupedObjs.forEach(vObj => {
                    vObj.origin.object.emit('finish', {
                        object: vObj.origin.object,
                        type: 'move',
                    });
                    // update
                    let pathSnapshoot;
                    switch (vObj.origin.object.type) {
                        case Config.objectTypes.line:
                        case Config.objectTypes.curve:
                        case Config.objectTypes.polygon:
                        case Config.objectTypes.textGroup:
                            pathSnapshoot = vObj.origin.object.path;
                            break;
                        case Config.objectTypes.text:
                        case Config.objectTypes.circle:
                        case Config.objectTypes.arc:
                        case Config.objectTypes.image:
                            pathSnapshoot = vObj.origin.object.center;
                            break;
                        default:
                    }
                    pathSnapshoot = JSON.parse(JSON.stringify(pathSnapshoot));
                    vObj.pathSnapshoot = pathSnapshoot;
                });
            }

            // self.sys.pickupedObjs = [];
            hoveredObj.length = 0;
            mousedownPos.length = 0;
        }
    });

    window.addEventListener('keyup', e => {
        switch (e.keyCode) {
            case 16:
                events.shift = false;
                break;
            case 17:
                events.ctrl = false;
                break;
            case 18:
                events.alt = false;
                break;
            default:
                break;
        }
    });

    window.addEventListener('keydown', e => {
        // e.preventDefault();
        e.stopPropagation();

        if (e.keyCode == 16) {
            events.shift = true;
        }
        if (e.keyCode == 17) {
            events.ctrl = true;
        }
        if (e.keyCode == 18) {
            events.alt = true;
        }

        if (self.sys.pickupedObjs.length > 0) {
            let order = 'update';
            let x = 0;
            let y = 0;
            const eventType = 'keydown';

            switch (e.keyCode) {
                case 9:
                    order = 'cancel';
                    let index = self.sys.pickupedObjs[0].origin.index;
                    if (index === undefined) {
                        index = -1;
                    }
                    if (e.shiftKey) {
                        index -= 1;
                    } else {
                        index += 1;
                    }
                    if (index > self.sys.pickupedObjs[0].origin.object.path.length - 1) {
                        index = 0;
                    }
                    if (index < 0) {
                        index = self.sys.pickupedObjs[0].origin.object.path.length - 1;
                    }
                    self.sys.pickupedObjs[0].origin.index = index;
                    self.sys.pickupedObjs[0].origin.type = 'point';
                    e.preventDefault();
                    break;
                case 8:
                    // BackSpace
                    deleteObj(self.sys.pickupedObjs[0]);
                    order = 'cancel';
                    // update active index  & reget the active
                    break;
                case 16:
                    events.shift = true;
                    break;
                case 17:
                    events.ctrl = true;
                    break;
                case 18:
                    events.alt = true;
                    break;
                case 27:
                    // esc
                    self.sys.pickupedObjs = [];
                    hoveredObj = MatchTool.match([-99999, -99999], self.sys.objects, eventType);
                    order = 'cancel';
                    break;
                case 37:
                    // left
                    x = -1;
                    break;
                case 38:
                    // top
                    y = -1;
                    break;
                case 39:
                    // right
                    x = 1;
                    break;
                case 40:
                    // bottom
                    y = 1;
                    break;
                default:
                    order = false;
            }

            // update snapshoot
            let updateSnapshoot = () => {
                if (self.sys.pickupedObjs.length > 0) {
                    self.sys.pickupedObjs.map(obj => {
                        let pathSnapshoot;
                        switch (obj.origin.object.type) {
                            case Config.objectTypes.line:
                            case Config.objectTypes.curve:
                            case Config.objectTypes.polygon:
                            case Config.objectTypes.textGroup:
                                pathSnapshoot = obj.origin.object.path;
                                break;
                            case Config.objectTypes.text:
                            case Config.objectTypes.circle:
                            case Config.objectTypes.arc:
                                pathSnapshoot = obj.origin.object.center;
                                break;
                            default:
                        }
                        pathSnapshoot = JSON.parse(JSON.stringify(pathSnapshoot));
                        obj.pathSnapshoot = pathSnapshoot;
                    });
                    // pathSnapshoot = [{},{},{}]
                }
            };
            updateSnapshoot();
            if (order === 'update') {
                if (events.shift) {
                    // console.warn(self.sys.pickupedObjs.length);
                    if (self.sys.pickupedObjs.length > 1) {
                        const a = self.sys.pickupedObjs[0];
                        let oneObj = true;
                        const indexs = self.sys.pickupedObjs.map(obj => {
                            updateSnapshoot();
                            const snapShootPath = obj.pathSnapshoot;
                            const moveObject = obj;
                            move(moveObject, [x * step, y * step], step);
                            if (a.origin.object.id !== obj.origin.object.id) {
                                oneObj = false;
                            }
                            return obj.origin.index;
                        });

                        const uniIndexs = uniqueArr(indexs);
                        if (oneObj) {
                            a.origin.object.emit('finish', {
                                object: a.origin.object,
                                indexs: uniIndexs,
                                type: 'multichose',
                            });
                        }
                    }
                } else {
                    const snapShootPath = self.sys.pickupedObjs[0].pathSnapshoot;
                    const moveObject = self.sys.pickupedObjs[0];
                    move(moveObject, [x * step, y * step], step);
                    self.sys.pickupedObjs[0].origin.object.emit('finish', {
                        object: self.sys.pickupedObjs[0].origin.object,
                        type: 'move',
                    });
                }
                e.preventDefault();
            }
            self.draw();
        }
    });
};

export default Event;