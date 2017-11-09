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
    let pickupedObj = [];
    const step = self.options.grid.step;

    window.addEventListener('mousedown', e => {
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
                case Config.objectTypes.textGroup:
                    pathSnapshoot = hoveredObj[0].data.path;
                    break;
                case Config.objectTypes.text:
                case Config.objectTypes.circle:
                    pathSnapshoot = hoveredObj[0].data.center;
                    break;
                default:
            }
            pathSnapshoot = JSON.parse(JSON.stringify(pathSnapshoot));

            pickupedObj = [{
                pathSnapshoot,
                origin: hoveredObj[0],
            }];
            mousedownPos = scaleReverse([
                [e.pageX, e.pageY],
            ], self.options.grid.scale)[0];
        } else {
            pickupedObj = [];
        }
        self.draw();
    });

    window.addEventListener('mousemove', e => {
        let x = 0;
        let y = 0;
        if (pickupedObj.length === 0) {
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
            if (mousedownPos.length > 0) {
                x = e.pageX;
                y = e.pageY;
                [x, y] = scaleReverse([
                    [x, y],
                ], self.options.grid.scale)[0];
                let movedPos = [x - mousedownPos[0], y - mousedownPos[1]];
                movedPos = steplizePoint(movedPos, step);
                const snapShootPath = pickupedObj[0].pathSnapshoot;
                const moveObject = pickupedObj[0].origin;
                if (moveObject.data.object.userSet.dragable) {
                    move(moveObject, snapShootPath, movedPos, step);
                }
            }
            e.preventDefault();
        }
        self.draw();
    });


    window.addEventListener('mouseup', () => {
        if (pickupedObj.length > 0) {
            pickupedObj[0].origin.data.object.emit('finish', {
                object: pickupedObj[0].origin.data,
                type: 'move',
            });
            // update
            let pathSnapshoot;
            switch (pickupedObj[0].origin.data.type) {
                case Config.objectTypes.line:
                case Config.objectTypes.polygon:
                case Config.objectTypes.textGroup:
                    pathSnapshoot = pickupedObj[0].origin.data.path;
                    break;
                case Config.objectTypes.text:
                case Config.objectTypes.circle:
                    pathSnapshoot = pickupedObj[0].origin.data.center;
                    break;
                default:
            }
            pathSnapshoot = JSON.parse(JSON.stringify(pathSnapshoot));
            pickupedObj[0].pathSnapshoot = pathSnapshoot;
        }
        // pickupedObj = [];
        hoveredObj = [];
        mousedownPos = [];
    });

    window.addEventListener('keydown', e => {
        if (pickupedObj.length > 0) {
            let order = 'update';
            let x = 0;
            let y = 0;
            const eventType = 'keydown';

            switch (e.keyCode) {
                case 9:
                    order = 'cancel';
                    let index = pickupedObj[0].origin.index;
                    if (index === undefined) {
                        index = -1;
                    }
                    if (e.shiftKey) {
                        index -= 1;
                    } else {
                        index += 1;
                    }
                    if (index > pickupedObj[0].origin.data.path.length - 1) {
                        index = 0;
                    }
                    if (index < 0) {
                        index = pickupedObj[0].origin.data.path.length - 1;
                    }
                    pickupedObj[0].origin.index = index;
                    pickupedObj[0].origin.type = 'point';
                    e.preventDefault();
                    break;
                case 8:
                    // delete
                    deleteObj(pickupedObj[0]);
                    order = 'cancel';
                    // update active index  & reget the active
                    break;
                case 27:
                    // esc
                    pickupedObj = [];
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
            if (pickupedObj.length > 0) {
                let pathSnapshoot;
                switch (pickupedObj[0].origin.data.type) {
                    case Config.objectTypes.line:
                    case Config.objectTypes.polygon:
                    case Config.objectTypes.textGroup:
                        pathSnapshoot = pickupedObj[0].origin.data.path;
                        break;
                    case Config.objectTypes.text:
                    case Config.objectTypes.circle:
                        pathSnapshoot = pickupedObj[0].origin.data.center;
                        break;
                    default:
                }
                pathSnapshoot = JSON.parse(JSON.stringify(pathSnapshoot));
                pickupedObj[0].pathSnapshoot = pathSnapshoot;
            }

            if (order === 'update') {
                const snapShootPath = pickupedObj[0].pathSnapshoot;
                const moveObject = pickupedObj[0].origin;
                move(moveObject, snapShootPath, [x * step, y * step], step);

                pickupedObj[0].origin.data.object.emit('finish', {
                    object: pickupedObj[0].origin.data,
                    type: 'move',
                });
                e.preventDefault();
            }
            self.draw();
        }
    });
};

export default Event;