/**
 * @file this file is countrol the move the object
 */

/* global window */

import Config from '../config/config';
import steplizePoint from '../tools/steplize';
import boundaryLize from '../tools/boundary-check';

import Arc from './move-arc';

const move = (obj, movedPos, step) => {
    const snapShootPath = obj.pathSnapshoot;
    const moveObject = obj.origin;
    const outBoxSnapshootPath = obj.outBoxSnapshoot;
    const moveType = moveObject.type;
    const object = moveObject.object;

    let moveIndex = null;

    const needBoundaryCheck = object.userSet.boundaryCheck;
    const scale = object.Visual.options.grid.scale || [1, 1];
    const pixelRatio = scale[0] * (window.devicePixelRatio || 1);
    // boundaryCheck
    switch (object.type) {
        case Config.objectTypes.polygon:
        case Config.objectTypes.line:
        case Config.objectTypes.curve:
        case Config.objectTypes.textGroup:
            if (moveType === 'point') {
                moveIndex = moveObject.index;
                if (needBoundaryCheck) {
                    const maxBound = [
                        moveObject.object.Visual.canvas.width / pixelRatio,
                        moveObject.object.Visual.canvas.height / pixelRatio,
                    ];
                    object.path[moveIndex] = boundaryLize([
                        [
                            snapShootPath[moveIndex][0] + movedPos[0],
                            snapShootPath[moveIndex][1] + movedPos[1],
                        ],
                    ], maxBound)[0];
                } else {
                    object.path[moveIndex][0] = snapShootPath[moveIndex][0] + movedPos[0];
                    object.path[moveIndex][1] = snapShootPath[moveIndex][1] + movedPos[1];
                }
                object.path[moveIndex] = steplizePoint(object.path[moveIndex], step);
            } else {
                if (needBoundaryCheck) {
                    const maxBound = [
                        moveObject.object.Visual.canvas.width / pixelRatio,
                        moveObject.object.Visual.canvas.height / pixelRatio,
                    ];
                    object.path = boundaryLize(snapShootPath.map(
                        item => steplizePoint([item[0] + movedPos[0], item[1] + movedPos[1]], step),
                    ), maxBound);
                } else {
                    object.path = snapShootPath.map(
                        item => steplizePoint([item[0] + movedPos[0], item[1] + movedPos[1]], step),
                    );
                }
            }
            // update outBox
            object.sys.outBox = {
                xMin: Infinity,
                xMax: -Infinity,
                yMin: Infinity,
                yMax: -Infinity,
            };
            object.path.forEach(point => {
                object.sys.outBox.xMin = Math.min(object.sys.outBox.xMin, point[0]);
                object.sys.outBox.xMax = Math.max(object.sys.outBox.xMax, point[0]);
                object.sys.outBox.yMin = Math.min(object.sys.outBox.yMin, point[1]);
                object.sys.outBox.yMax = Math.max(object.sys.outBox.yMax, point[1]);
            });
            break;
        case Config.objectTypes.text:
        case Config.objectTypes.circle:
        case Config.objectTypes.image:
            if (needBoundaryCheck) {
                const maxBound = [
                    moveObject.object.Visual.canvas.width / pixelRatio,
                    moveObject.object.Visual.canvas.height / pixelRatio,
                ];

                object.center = boundaryLize([
                    [
                        snapShootPath[0] + movedPos[0],
                        snapShootPath[1] + movedPos[1],
                    ],
                ], maxBound)[0];
            } else {
                object.center = [
                    snapShootPath[0] + movedPos[0],
                    snapShootPath[1] + movedPos[1],
                ];
            }
            break;
        case Config.objectTypes.arc:
            Arc(moveObject, snapShootPath, outBoxSnapshootPath, movedPos);
            break;
        default:
    }

    // emit
    const emitObj = {
        type: moveType || 'object',
        object: moveObject.object,
        index: moveIndex,
    };
    object.emit('change', emitObj);
};


export default move;