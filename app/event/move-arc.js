/* globals window */
import boundaryLize from '../tools/boundary-check';
import checkBound from '../tools/checkBound';

export default function move(theObject, snapShootPath, outBoxSnapshootPath, movedPos) {
    const object = theObject.object;
    const type = theObject.type;
    const subtype = theObject.subtype;
    const center = snapShootPath;
    const radius = object.radius;
    const counterclockwise = object.counterclockwise;
    const subOrAdd = counterclockwise ? -1 : 1;
    const scale = object.Visual.options.grid.scale || [1, 1];
    const pixelRatio = scale[0] * (window.devicePixelRatio || 1);
    const maxBound = [
        object.Visual.canvas.width / pixelRatio,
        object.Visual.canvas.height / pixelRatio,
    ];
    // console.log('arc move:', type, subtype, theObject, movedPos);

    if (type === 'point') {
        const mouse = [theObject.point[0] + movedPos[0], theObject.point[1] + movedPos[1]];
        if (subtype === 'start' || subtype === 'end') {
            const dMouseyCenterX = mouse[0] - center[0];
            const dMouseyCenterY = mouse[1] - center[1];
            const dMouseCentre = Math.sqrt((dMouseyCenterX ** 2) + (dMouseyCenterY ** 2));
            let arc = Math.acos(dMouseyCenterX / dMouseCentre);
            if (dMouseyCenterY < 0) {
                arc = (Math.PI * 2) - arc;
            }
            object[`${subtype}Arc`] = arc;

            object.sys[`${subtype}Point`] = [
                center[0] + (radius * Math.cos(arc)),
                center[1] + (radius * Math.sin(arc)),
            ];

            let useStart = object.startArc;
            if (object.startArc > object.endArc) {
                useStart -= Math.PI * 2;
            }
            object.sys.centerPoint = [
                center[0] + (subOrAdd * radius * Math.cos((useStart + object.endArc) / 2)),
                center[1] + (subOrAdd * radius * Math.sin((useStart + object.endArc) / 2)),
            ];
        } else if (subtype === 'center') {
            const startPoint = object.sys.startPoint;
            const endPoint = object.sys.endPoint;
            const vEndToStartPoint = [startPoint[0] - endPoint[0], startPoint[1] - endPoint[1]];
            const vAxleX = [Math.abs(vEndToStartPoint[0]) || 1, 0];

            const arcVendToStartPointTOvAxleX = Math.acos(
                (
                    (vEndToStartPoint[0] * vAxleX[0]) +
                    (vEndToStartPoint[1] * vAxleX[1])
                ) /
                (
                    Math.sqrt((vEndToStartPoint[0] ** 2) + (vEndToStartPoint[1] ** 2)) *
                    Math.sqrt((vAxleX[0] ** 2) + (vAxleX[1] ** 2))
                ),
            );
            const newRadius = Math.sqrt((center[0] - mouse[0]) ** 2 + (center[1] - mouse[1]) ** 2);
            const over = checkBound.isOverBound(object.center, newRadius, object.startArc, object.endArc, object.counterclockwise, maxBound);
            const overBound = over.flag;
            const overBoundAxis = over.axis;
            console.log('--overBound--:', overBound);
            if (!overBound) {
                object.radius = newRadius;
            } else {
                console.log('over boundary:', overBound);
            }

            let useStart = object.startArc;
            if (object.startArc > object.endArc) {
                useStart -= Math.PI * 2;
            }
            object.sys = {
                outBox: {
                    xMin: object.center[0] - object.radius - 5,
                    xMax: object.center[0] + object.radius + 5,
                    yMin: object.center[1] - object.radius - 5,
                    yMax: object.center[1] + object.radius + 5,
                },
                startPoint: [
                    object.center[0] + (object.radius * Math.cos(object.startArc)),
                    object.center[1] + (object.radius * Math.sin(object.startArc)),
                ],
                endPoint: [
                    object.center[0] + (object.radius * Math.cos(object.endArc)),
                    object.center[1] + (object.radius * Math.sin(object.endArc)),
                ],
                centerPoint: [
                    object.center[0] +
                    (subOrAdd * object.radius * Math.cos(useStart + (object.endArc - useStart) / 2)),
                    object.center[1] +
                    (subOrAdd * object.radius * Math.sin(useStart + (object.endArc - useStart) / 2)),
                ],
            };
        }
    } else {
        const needBoundaryCheck = object.userSet.boundaryCheck;
        if (needBoundaryCheck) {
            const newCenter = boundaryLize([
                [
                    snapShootPath[0] + movedPos[0],
                    snapShootPath[1] + movedPos[1],
                ],
            ], maxBound)[0];
            // console.log('isOverBound', object);
            const over = checkBound.isOverBound(newCenter, object.radius, object.startArc, object.endArc, object.counterclockwise, maxBound);
            const overBound = over.flag;
            const overBoundAxis = over.axis;
            if (overBound) {
                newCenter[0] <= object.radius ? newCenter[0] = object.radius : '';
                newCenter[0] >= maxBound[0] - object.radius ? newCenter[0] = maxBound[0] - object.radius : '';
                newCenter[1] <= object.radius ? newCenter[1] = object.radius : '';
                newCenter[1] >= maxBound[1] - object.radius ? newCenter[1] = maxBound[1] - object.radius : '';
                if (overBoundAxis === 'x') {
                    object.center[1] = newCenter[1];
                } else if (overBoundAxis === 'y') {
                    object.center[0] = newCenter[0];
                }
            } else {
                object.center = newCenter;
            }
        } else {
            object.center = [
                snapShootPath[0] + movedPos[0],
                snapShootPath[1] + movedPos[1],
            ];
        }

        let useStart = object.startArc;
        if (object.startArc > object.endArc) {
            useStart -= Math.PI * 2;
        }
        object.sys = {
            outBox: {
                xMin: object.center[0] - object.radius - 5,
                xMax: object.center[0] + object.radius + 5,
                yMin: object.center[1] - object.radius - 5,
                yMax: object.center[1] + object.radius + 5,
            },
            startPoint: [
                object.center[0] + (object.radius * Math.cos(object.startArc)),
                object.center[1] + (object.radius * Math.sin(object.startArc)),
            ],
            endPoint: [
                object.center[0] + (object.radius * Math.cos(object.endArc)),
                object.center[1] + (object.radius * Math.sin(object.endArc)),
            ],
            centerPoint: [
                object.center[0] +
                (subOrAdd * object.radius * Math.cos(useStart + (object.endArc - useStart) / 2)),
                object.center[1] +
                (subOrAdd * object.radius * Math.sin(useStart + (object.endArc - useStart) / 2)),
            ],
        };
    }
}