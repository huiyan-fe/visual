/**
 * @file this file is countrol the move the object
 */

import Config from '../config/config';
import steplizePoint from '../tools/steplize';

const move = (moveObject, snapShootPath, movedPos, step) => {
    switch (moveObject.data.type) {
        case Config.objectTypes.polygon:
        case Config.objectTypes.line:
            let newPath = [];
            const isMoveSingle = (moveObject.type === 'point') && (moveObject.length < 10);
            if (isMoveSingle) {
                const singleIndex = moveObject.index;
                const path = moveObject.data.path;
                path[singleIndex][0] = snapShootPath[singleIndex][0] + movedPos[0];
                path[singleIndex][1] = snapShootPath[singleIndex][1] + movedPos[1];
                path[singleIndex] = steplizePoint(path[singleIndex], step);
                // emit
                moveObject.data.object.emit('change', {
                    type: 'point',
                    index: singleIndex,
                    changeData: JSON.parse(JSON.stringify(path[singleIndex])),
                    object: moveObject.data,
                });
            } else {
                newPath = snapShootPath.map(item => {
                    let x = item[0];
                    let y = item[1];
                    x += movedPos[0];
                    y += movedPos[1];
                    return steplizePoint([x, y], step);
                });
                moveObject.data.path = newPath;
                // emit
                moveObject.data.object.emit('change', {
                    type: 'line',
                    changeData: newPath,
                    object: moveObject.data,
                });
            }
            // update outBox
            const sys = moveObject.data.sys;
            const outBox = {
                xMin: Infinity,
                xMax: -Infinity,
                yMin: Infinity,
                yMax: -Infinity,
            };
            newPath = moveObject.data.path;
            newPath.forEach(point => {
                outBox.xMin = Math.min(outBox.xMin, point[0]);
                outBox.xMax = Math.max(outBox.xMax, point[0]);
                outBox.yMin = Math.min(outBox.yMin, point[1]);
                outBox.yMax = Math.max(outBox.yMax, point[1]);
            });
            sys.outBox = outBox;
            break;
        case Config.objectTypes.text:
        case Config.objectTypes.circle:
            moveObject.data.center = [
                snapShootPath[0] + movedPos[0],
                snapShootPath[1] + movedPos[1],
            ];
            moveObject.data.object.emit('change', {
                object: moveObject.data,
            });
            break;
        default:
    }
};

export default move;