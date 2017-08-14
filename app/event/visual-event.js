/* globals window */
import Config from '../config/config';
import MatchTool from '../match/match';
import steplizePoint from '../tools/steplize';
import { scaleReverse } from '../tools/scalelize';
import move from './move';

const Event = self => {
    const canvas = self.canvas;
    let mousedownPos = [];
    let hoveredObj = [];
    let pickupedObj = [];
    const step = self.options.grid.step;

    canvas.addEventListener('mousedown', e => {
        const x = e.offsetX;
        const y = e.offsetY;
        hoveredObj = MatchTool.match([x, y], self.sys.objects);

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
            if (e.target !== canvas) {
                x = -999;
                y = -999;
            }

            [x, y] = scaleReverse([
                [x, y],
            ], self.options.grid.scale)[0];

            hoveredObj = MatchTool.match([x, y], self.sys.objects);
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

                move(moveObject, snapShootPath, movedPos, step);
            }
            e.preventDefault();
        }
        self.draw();
    });


    window.addEventListener('mouseup', () => {
        if (pickupedObj.length > 0) {
            pickupedObj[0].origin.data.object.emit('finish', {
                object: pickupedObj[0].origin.data,
            });
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
            switch (e.keyCode) {
                case 27:
                    pickupedObj = [];
                    hoveredObj = MatchTool.match([-99999, -99999], self.sys.objects);
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
            }

            if (order === 'update') {
                const snapShootPath = pickupedObj[0].pathSnapshoot;
                const moveObject = pickupedObj[0].origin;
                move(moveObject, snapShootPath, [x * step, y * step], step);

                let pathSnapshoot;
                switch (pickupedObj[0].origin.data.type) {
                    case Config.objectTypes.line:
                    case Config.objectTypes.polygon:
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
            self.draw();
        }
    });
};

export default Event;