/**
 * @file this file is countrol the move the object
 */

import Config from '../config/config';
import steplizePoint from '../tools/steplize';

const move = (moveObject, snapShootPath, movedPos, step) => {
    const moveType = moveObject.type;
    const innerObject = moveObject.innerObject;
    let moveIndex = null;

    switch (innerObject.type) {
        case Config.objectTypes.polygon:
        case Config.objectTypes.line:
        case Config.objectTypes.textGroup:
            if (moveType === 'point') {
                moveIndex = moveObject.index;
                innerObject.path[moveIndex][0] = snapShootPath[moveIndex][0] + movedPos[0];
                innerObject.path[moveIndex][1] = snapShootPath[moveIndex][1] + movedPos[1];
                innerObject.path[moveIndex] = steplizePoint(innerObject.path[moveIndex], step);
            } else {
                innerObject.path = snapShootPath.map(
                    item => steplizePoint([item[0] + movedPos[0], item[1] + movedPos[1]], step),
                );
            }
            // update outBox
            innerObject.sys.outBox = {
                xMin: Infinity,
                xMax: -Infinity,
                yMin: Infinity,
                yMax: -Infinity,
            };
            innerObject.path.forEach(point => {
                innerObject.sys.outBox.xMin = Math.min(innerObject.sys.outBox.xMin, point[0]);
                innerObject.sys.outBox.xMax = Math.max(innerObject.sys.outBox.xMax, point[0]);
                innerObject.sys.outBox.yMin = Math.min(innerObject.sys.outBox.yMin, point[1]);
                innerObject.sys.outBox.yMax = Math.max(innerObject.sys.outBox.yMax, point[1]);
            });
            break;
        case Config.objectTypes.text:
        case Config.objectTypes.circle:
            innerObject.center = [
                snapShootPath[0] + movedPos[0],
                snapShootPath[1] + movedPos[1],
            ];
            break;
        default:
    }

    // emit
    const emitObj = {
        type: moveType || 'object',
        object: moveObject.data,
        index: moveIndex,
    };
    innerObject.object.emit('change', emitObj);
};

export default move;