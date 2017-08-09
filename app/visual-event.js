/* globals window */
import Config from './config/config';
import MatchTool from './tools/match';
import steplizePoint from './tools/steplize';
import { scaleReverse } from './tools/scalelize';

const Event = self => {
    const canvas = self.canvas;
    let mousedownPos = [];
    let hoveredObj = [];
    let pickupedObj = [];
    const step = self.options.grid.step;

    canvas.addEventListener('mousedown', e => {
        if (hoveredObj.length >= 1) {
            let pathSnapshoot;
            switch (hoveredObj[0].data.type) {
                case Config.objectTypes.line:
                    pathSnapshoot = JSON.parse(JSON.stringify(hoveredObj[0].data.path));
                    break;
                case Config.objectTypes.text:
                    pathSnapshoot = JSON.parse(JSON.stringify(hoveredObj[0].data.center));
                    break;
                case Config.objectTypes.circle:
                    pathSnapshoot = JSON.parse(JSON.stringify(hoveredObj[0].data.center));
                    break;
                default:
            }

            pickupedObj = [{
                pathSnapshoot,
                origin: Object.assign(hoveredObj[0]),
            }];
            mousedownPos = scaleReverse([
                [e.pageX, e.pageY],
            ], self.options.grid.scale)[0];
        }
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
            x = e.pageX;
            y = e.pageY;
            [x, y] = scaleReverse([
                [x, y],
            ], self.options.grid.scale)[0];
            let movedPos = [x - mousedownPos[0], y - mousedownPos[1]];
            movedPos = steplizePoint(movedPos, step);

            const snapShootPath = pickupedObj[0].pathSnapshoot;
            switch (hoveredObj[0].data.type) {
                case Config.objectTypes.line:
                    let newPath = [];
                    const isMoveSingle = (pickupedObj[0].origin.type === 'point') && (pickupedObj[0].origin.length < 10);
                    if (isMoveSingle) {
                        const singleIndex = pickupedObj[0].origin.index;
                        const path = pickupedObj[0].origin.data.path;
                        path[singleIndex][0] = snapShootPath[singleIndex][0] + movedPos[0];
                        path[singleIndex][1] = snapShootPath[singleIndex][1] + movedPos[1];
                        path[singleIndex] = steplizePoint(path[singleIndex], step);
                        // emit
                        pickupedObj[0].origin.data.object.emit('change', {
                            type: 'point',
                            index: singleIndex,
                            changeData: JSON.parse(JSON.stringify(path[singleIndex])),
                            object: pickupedObj[0].origin.data,
                        });
                    } else {
                        newPath = snapShootPath.map(item => {
                            let x = item[0];
                            let y = item[1];
                            x += movedPos[0];
                            y += movedPos[1];
                            return steplizePoint([x, y], step);
                        });
                        pickupedObj[0].origin.data.path = newPath;
                        // emit
                        pickupedObj[0].origin.data.object.emit('change', {
                            type: 'line',
                            changeData: newPath,
                            object: pickupedObj[0].origin.data,
                        });
                    }
                    break;
                case Config.objectTypes.text:
                    pickupedObj[0].origin.data.center = [
                        snapShootPath[0] + movedPos[0],
                        snapShootPath[1] + movedPos[1],
                    ];
                    pickupedObj[0].origin.data.object.emit('change', {
                        type: 'center',
                        // changeData: JSON.parse(JSON.stringify([
                        //     snapShootPath[0] + movedPos[0],
                        //     snapShootPath[1] + movedPos[1],
                        // ])),
                        object: pickupedObj[0].origin.data,
                    });
                    break;
                case Config.objectTypes.circle:
                    pickupedObj[0].origin.data.center = [
                        snapShootPath[0] + movedPos[0],
                        snapShootPath[1] + movedPos[1],
                    ];
                    pickupedObj[0].origin.data.object.emit('change', {
                        object: pickupedObj[0].origin.data,
                    });
                    break;
                default:
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
        pickupedObj = [];
        mousedownPos = [];
    });
};

export default Event;