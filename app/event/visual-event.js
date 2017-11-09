/* globals window */
import Config from '../config/config';
import MatchTool from '../match/match';
import steplizePoint from '../tools/steplize';
import { scaleReverse } from '../tools/scalelize';
import move from './move';
import deleteObj from './delete';

const Event = self => {
    const canvas = self.canvas;
    let mousedownPos = [];
    let hoveredObj = [];
    let mousedown = false;
    const step = self.options.grid.step;
    let events = {
        ctrl: false,
        shift: false,
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
        hoveredObj = MatchTool.match([x, y], self.sys.objects, eventType);

        if (hoveredObj.length >= 1) {
            let pathSnapshoot;
            switch (hoveredObj[0].data.type) {
                case Config.objectTypes.line:
                case Config.objectTypes.polygon:
                    pathSnapshoot = hoveredObj[0].data.path;
                    break;
                case Config.objectTypes.text:
                case Config.objectTypes.circle:
                    pathSnapshoot = hoveredObj[0].data.center;
                    break;
                default: break;
            }
            pathSnapshoot = JSON.parse(JSON.stringify(pathSnapshoot));

            self.sys.pickupedObjs.push({
                pathSnapshoot,
                origin: hoveredObj[0],
            });

            mousedownPos = scaleReverse([
                [e.pageX, e.pageY],
            ], self.options.grid.scale)[0];
        } else {
            if (!events.shift) {
                self.sys.pickupedObjs = [];
            }
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
            const eventType = 'mousemove';
            hoveredObj = MatchTool.match([x, y], self.sys.objects, eventType);
        } else {
            if (mousedownPos.length > 0 && mousedown) {
                x = e.pageX;
                y = e.pageY;
                [x, y] = scaleReverse([
                    [x, y],
                ], self.options.grid.scale)[0];
                let movedPos = [x - mousedownPos[0], y - mousedownPos[1]];
                movedPos = steplizePoint(movedPos, step);
                self.sys.pickupedObjs.map((pos, index) => {
                    const snapShootPath = pos.pathSnapshoot;
                    const moveObject = pos.origin;
                    if (moveObject.data.object.userSet.dragable) {
                        move(moveObject, snapShootPath, movedPos, step);
                    }
                });
            }
            e.preventDefault();
        }
        self.draw();
    });

    let uniqueArr = (arr) => {
        let result = [], hash = {};
        for (let i = 0, elem; (elem = arr[i]) != null; i++) {
            if (!hash[elem]) {
                result.push(elem);
                hash[elem] = true;
            }
        }
        return result;
    };

    window.addEventListener('mouseup', () => {
        mousedown = false;
        if (events.shift) {
            if (self.sys.pickupedObjs.length > 1) {
                const a = self.sys.pickupedObjs[0];
                let oneObj = true;
                const indexs = self.sys.pickupedObjs.map((obj) => {
                    if (a.origin.data.id !== obj.origin.data.id) {
                        oneObj = false;
                    }
                    return obj.origin.index;
                });

                const uniIndexs = uniqueArr(indexs);
                if (oneObj) {
                    a.origin.data.object.emit('finish', {
                        object: a.origin.data,
                        index: uniIndexs,
                        type: 'multichose',
                    });
                }
            }
        } else {
            if (self.sys.pickupedObjs.length === 1) {
                self.sys.pickupedObjs.forEach(vObj => {
                    vObj.origin.data.object.emit('finish', {
                        object: vObj.origin.data,
                        type: 'move',
                    });
                    // update
                    let pathSnapshoot;
                    switch (vObj.origin.data.type) {
                        case Config.objectTypes.line:
                        case Config.objectTypes.polygon:
                            pathSnapshoot = vObj.origin.data.path;
                            break;
                        case Config.objectTypes.text:
                        case Config.objectTypes.circle:
                            pathSnapshoot = vObj.origin.data.center;
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
                // shift
                events.shift = false;
                break;
            case 17:
                // ctrl
                events.ctrl = false;
                break;
            default: break;
        }
    });

    window.addEventListener('keydown', e => {
        if (e.keyCode == 16) {
            // shift
            events.shift = true;
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
                    if (index > self.sys.pickupedObjs[0].origin.data.path.length - 1) {
                        index = 0;
                    }
                    if (index < 0) {
                        index = self.sys.pickupedObjs[0].origin.data.path.length - 1;
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
                    // shift
                    events.shift = true;
                    break;
                case 17:
                    // ctrl
                    events.ctrl = true;
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
            if (self.sys.pickupedObjs.length > 0) {
                let pathSnapshoot;
                switch (self.sys.pickupedObjs[0].origin.data.type) {
                    case Config.objectTypes.line:
                    case Config.objectTypes.polygon:
                        pathSnapshoot = self.sys.pickupedObjs[0].origin.data.path;
                        break;
                    case Config.objectTypes.text:
                    case Config.objectTyfpes.circle:
                        pathSnapshoot = self.sys.pickupedObjs[0].origin.data.center;
                        break;
                    default:
                }
                pathSnapshoot = JSON.parse(JSON.stringify(pathSnapshoot));
                self.sys.pickupedObjs[0].pathSnapshoot = pathSnapshoot;
            }

            if (order === 'update') {
                const snapShootPath = self.sys.pickupedObjs[0].pathSnapshoot;
                const moveObject = self.sys.pickupedObjs[0].origin;
                move(moveObject, snapShootPath, [x * step, y * step], step);

                self.sys.pickupedObjs[0].origin.data.object.emit('finish', {
                    object: self.sys.pickupedObjs[0].origin.data,
                    type: 'move',
                });
                e.preventDefault();
            }
            self.draw();
        }
    });
};

export default Event;