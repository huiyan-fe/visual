/* globals window */
import boundaryLize from '../tools/boundary-check';

const isArcInRange = (initArc, startArc, endArc, counterclockwise) => {
    let flag = false;
    let arc = initArc;
    if (arc > 2 * Math.PI) {
        arc = arc % (Math.PI * 2);
    }
    if (arc < 0) {
        arc = arc % (Math.PI * 2) + (2 * Math.PI);
    }
    let start = startArc;
    let end = endArc;
    if (counterclockwise) {
        start = endArc;
        end = startArc + 2 * Math.PI;
        arc = arc + 2 * Math.PI;
    }
    if (arc < end && arc > start) {
        flag = true;
    }
    return flag;
}

const isOverBound = (newCenter, item, bound) => {
    const center = newCenter; // item.center;
    const radius = item.radius;
    const startArc = item.startArc;
    const endArc = item.endArc;
    const counterclockwise = item.counterclockwise;
    let overBoundFlag = false;
    // 起点终点目标位置
    const buffer = 0;
    const d1x = center[0] + Math.cos(startArc);
    const d1y = center[1] + Math.sin(startArc);
    const d2x = center[0] + Math.cos(endArc);
    const d2y = center[1] + Math.sin(endArc);
    // 判断是否超出canvas边界
    let overBoundAxis = '';
    if (d1y <= (0 - buffer) || d1x <= (0 - buffer) || d2x <= (0 - buffer) || d2y <= (0 - buffer) ||
        d1y >= (buffer + bound[1]) || d1x >= (buffer + bound[0]) || d2x >= (buffer + bound[0]) || d2y >= (buffer + bound[1])
    ) {
        overBoundFlag = true;
    } else {
        // 计算x轴只用cos，y轴用sin
        let arc1 = null;
        let arc2 = null;
        if (center[0] - radius <= 0) {
            arc1 = Math.acos(-center[0] / radius);
            arc2 = -arc1;
            overBoundAxis = 'x';
        } else if (center[1] - radius < 0) {
            arc1 = Math.asin(-center[1] / radius);
            arc2 = -(Math.PI + arc1);
            overBoundAxis = 'y';
        } else if (center[0] + radius > bound[0]) {
            arc1 = Math.acos((bound[0] - center[0]) / radius);
            arc2 = -arc1;
            overBoundAxis = 'x';
        } else if (center[1] + radius > bound[1]) {
            arc1 = Math.asin((bound[1] - center[1]) / radius);
            arc2 = -(Math.PI + arc1);
            overBoundAxis = 'y';
        }
        const flag1 = isArcInRange(arc1, startArc, endArc, counterclockwise);
        const flag2 = isArcInRange(arc2, startArc, endArc, counterclockwise);
        overBoundFlag = flag1 || flag2;
    }
    if (!overBoundFlag) {
        overBoundAxis = '';
    }
    return {
        overBoundFlag,
        overBoundAxis
    };
}

export default function move(theObject, snapShootPath, outBoxSnapshootPath, movedPos) {
    const object = theObject.object;
    const type = theObject.type;
    const subtype = theObject.subtype;
    const center = snapShootPath;
    const radius = object.radius;
    const counterclockwise = object.counterclockwise;
    const subOrAdd = counterclockwise ? -1 : 1;
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
            object.radius = newRadius;

            let useStart = object.startArc;
            if (object.startArc > object.endArc) {
                useStart -= Math.PI * 2;
            }

            // console.log(object.center[0], object.radius)
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
            const scale = object.Visual.options.grid.scale || [1, 1];
            const pixelRatio = scale[0] * (window.devicePixelRatio || 1);
            const maxBound = [
                object.Visual.canvas.width / pixelRatio,
                object.Visual.canvas.height / pixelRatio,
            ];
            const newCenter = boundaryLize([
                [
                    snapShootPath[0] + movedPos[0],
                    snapShootPath[1] + movedPos[1],
                ],
            ], maxBound)[0];
            // 需要拿新的重新计算的中心点去判断是否超出边界
            const {
                overBound,
                overBoundAxis
            } = isOverBound(newCenter, object, maxBound);
            if (overBound) {
                newCenter[0] <= object.radius ? newCenter[0] = object.radius : '';
                newCenter[0] >= maxBound[0] - object.radius ? newCenter[0] = maxBound[0] - object.radius : '';
                newCenter[1] <= object.radius ? newCenter[1] = object.radius : '';
                newCenter[1] >= maxBound[1] - object.radius ? newCenter[1] = maxBound[1] - object.radius : '';
                // object.center = JSON.parse(JSON.stringify(object.lastCenter));
                // object.center = JSON.parse(JSON.stringify(object.lastCenter));
                // if (overBoundAxis === 'x') {
                //     object.center[1] = newCenter[1];
                // } else if (overBoundAxis === 'y') {
                //     object.center[0] = newCenter[0];
                // }
            } else {
                // console.log('--', overBound, [newCenter[0] - object.center[0], newCenter[1] - object.center[1]], movedPos);
                object.center = newCenter;
            }

            // let boxBounds = [
            //     [outBoxSnapshootPath.xMin, outBoxSnapshootPath.yMin],
            //     [outBoxSnapshootPath.xMin, outBoxSnapshootPath.yMax],
            //     [outBoxSnapshootPath.xMax, outBoxSnapshootPath.yMin],
            //     [outBoxSnapshootPath.xMax, outBoxSnapshootPath.yMax]
            // ];
            // boxBounds = boundaryLize(boxBounds.map(
            //     pt => {
            //         return [pt[0] + movedPos[0], pt[1] + movedPos[1]];
            //     }), maxBound);
            // let xs = [];
            // let ys = [];
            // boxBounds.map(p => {
            //     xs.push(p[0]);
            //     ys.push(p[1]);
            // });
            // xs = xs.sort();
            // ys = ys.sort();
            // const _outBox = {
            //     xMin: xs[3],
            //     xMax: xs[0],
            //     yMin: ys[3],
            //     yMax: ys[0],
            // };
            // const _boxCenter = [(_outBox.xMax + _outBox.xMin) / 2, (_outBox.yMax + _outBox.yMin) / 2]
            // if (object.center[0] !== _boxCenter[0] ||
            //     object.center[1] !== _boxCenter[1]) {
            //     object.center = _boxCenter;
            // }
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