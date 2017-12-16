/* globals window */
import boundaryLize from '../tools/boundary-check';

export default function move(theObject, snapShootPath, movedPos) {
    const object = theObject.object;
    const type = theObject.type;
    const subtype = theObject.subtype;
    const center = snapShootPath;
    const radius = object.radius;
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
                center[0] + (radius * Math.cos((useStart + object.endArc) / 2)),
                center[1] + (radius * Math.sin((useStart + object.endArc) / 2)),
            ];
        } else if (subtype === 'center') {
            // console.log(object.center, center);
            // console.log(radius)
            // console.log('center', object.center);
            // console.log('arcCenter', object.sys.centerPoint);
            // console.log('mouse', mouse);
            // console.log(object.sys.startPoint)
            // const arcCenter = object.sys.centerPoint;
            const startPoint = object.sys.startPoint;
            const endPoint = object.sys.endPoint;
            // const vCenterToStartPoint = [startPoint[0] - center[0], startPoint[1] - center[1]];
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
            // console.warn(arcVendToStartPointTOvAxleX)
                // console.warn(startPoint,arcVendToStartPointTOvAxleX / (Math.PI / 180));

            // const vCenterToMouse = [mouse[0] - center[0], mouse[1] - center[1]];

            // const vCenterToMouseRatated = [
            //     (vCenterToMouse[0] * Math.cos(arcVendToStartPointTOvAxleX)) +
            //     (vCenterToMouse[1] * Math.sin(arcVendToStartPointTOvAxleX)),
            //     (vCenterToMouse[0] * -Math.sin(arcVendToStartPointTOvAxleX)) +
            //     (vCenterToMouse[1] * Math.cos(arcVendToStartPointTOvAxleX)),
            // ];
            // // console.warn(vCenterToArccenter, vAxleX, arcVendToStartPointTOvAxleX / (Math.PI / 180));
            // // console.warn(vCenterToMouse, vCenterToMouseRatated, arcVendToStartPointTOvAxleX / (Math.PI / 180));
            // const newPoint = [0, vCenterToMouseRatated[1]];
            // // 计算方法有问题，应该考虑到弦不过原点

            // // console.log(newPoint, center)

            // const newPointRotated = [
            //     (newPoint[0] * Math.cos(-arcVendToStartPointTOvAxleX)) +
            //     (newPoint[1] * Math.sin(-arcVendToStartPointTOvAxleX)),
            //     (newPoint[0] * -Math.sin(-arcVendToStartPointTOvAxleX)) +
            //     (newPoint[1] * Math.cos(-arcVendToStartPointTOvAxleX)),
            // ];
            // const mouseReflection = [center[0] + newPointRotated[0], center[1] + newPointRotated[1]];
            // console.log(vCenterToMouse, arcVendToStartPointTOvAxleX, newPoint, arcVendToStartPointTOvAxleX);


            // public static function getCirclePoint($pa, $pb, $pc) {
            //     $pa = explode(',', $pa);
            //     $pb = explode(',', $pb);
            //     $pc = explode(',', $pc);

            //     $m = ($pa[0]-$pc[0])*$pa[0] +  ($pa[1]-$pc[1])*$pa[1];
            //     $n = ($pb[0]-$pc[0])*$pb[0] +  ($pb[1]-$pc[1])*$pb[1];
            //     $k = ($pb[0]-$pc[0]) * ($pa[1]-$pc[1]);
            //     $l = ($pa[0]-$pc[0]) * ($pb[1]-$pc[1]);

            //     $x = -1 * ($m*($pb[1]-$pc[1])-$n*($pa[1]-$pc[1])) / ($k-$l);
            //     $y = ($m*($pb[0]-$pc[0])-$n*($pa[0]-$pc[0])) / ($k-$l);

            //     return array($x, $y);
            // }
            // const pStartMouseHalf = [(startPoint[0] + mouseReflection[0]) / 2, (startPoint[1] + mouseReflection[1]) / 2];
            // const pEndMouseHalf = [(endPoint[0] + mouseReflection[0]) / 2, (endPoint[1] + mouseReflection[1]) / 2];

            // const kl = (
            //         (pEndMouseHalf[0] * pStartMouseHalf[1]) -
            //         (pEndMouseHalf[0] * mouseReflection[1]) -
            //         (mouseReflection[0] * pStartMouseHalf[1]) -
            //         (pStartMouseHalf[0] * pEndMouseHalf[1])
            //     ) +
            //     (pStartMouseHalf[0] * mouseReflection[1]) +
            //     (mouseReflection[0] * pEndMouseHalf[1]);

            // const m = (pStartMouseHalf[0] - mouseReflection[0]) * pStartMouseHalf[0] +
            //     pStartMouseHalf[1] * (pStartMouseHalf[1] - mouseReflection[1]);
            // const n = (pEndMouseHalf[0] - mouseReflection[0]) * pEndMouseHalf[0] +
            //     pEndMouseHalf[1] * (pEndMouseHalf[1] - mouseReflection[1]);

            // const y = (m * (pEndMouseHalf[0] - mouseReflection[0]) - n * (pStartMouseHalf[0] - mouseReflection[0])) /
            //     kl;
            // const x = (m * (endPoint[1] - mouseReflection[1]) - n * (pStartMouseHalf[1] - mouseReflection[1])) /
            //     -kl;





            // console.log(startPoint, endPoint, mouseReflection);
            // const m = (startPoint[0] - mouseReflection[0]) * startPoint[0] + (startPoint[1] - mouseReflection[1]) * startPoint[1];
            // const n = (endPoint[0] - mouseReflection[0]) * endPoint[0] + (endPoint[1] - mouseReflection[1]) * endPoint[1];
            // const k = (endPoint[0] - mouseReflection[0]) * (startPoint[1] - mouseReflection[1]);
            // const l = (startPoint[0] - mouseReflection[0]) * (endPoint[1] - mouseReflection[1]);

            // const x = -1 * (m * (endPoint[1] - mouseReflection[1]) - n * (startPoint[1] - mouseReflection[1])) / (k - l);
            // const y = (m * (endPoint[0] - mouseReflection[0]) - n * (startPoint[0] - mouseReflection[0])) / (k - l);
            // console.log([x, y]);

            // return array($x, $y);
            // object.center = [x, y]
            // object.sys.centerPoint = mouseReflection;
            // object.center = [x, y];
            // const newRadius = Math.sqrt((x - mouseReflection[0]) ** 2 + (y - mouseReflection[1]) ** 2);
            // console.log(mouseReflection,center)
            const newRadius = Math.sqrt((center[0] - mouse[0]) ** 2 + (center[1] - mouse[1]) ** 2);
            object.radius = newRadius;

            let useStart = object.startArc;
            if (object.startArc > object.endArc) {
                useStart -= Math.PI * 2;
            }

            // console.log(object.center[0], object.radius)
            object.sys = {
                outBox: {
                    xMin: object.center[0] - object.radius - 20,
                    xMax: object.center[0] + object.radius + 20,
                    yMin: object.center[1] - object.radius - 20,
                    yMax: object.center[1] + object.radius + 20,
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
                    (object.radius * Math.cos(useStart + (object.endArc - useStart) / 2)),
                    object.center[1] +
                    (object.radius * Math.sin(useStart + (object.endArc - useStart) / 2)),
                ],
            };


            // console.log([x, y])
            // console.log(snapShootPath)

            // const vMousereflectionToStart = [startPoint[0] - mouseReflection[0], startPoint[1] - mouseReflection[1]];
            // const vMousereflectionToEnd = [endPoint[0] - mouseReflection[0], endPoint[1] - mouseReflection[1]];


            // const vMouseReflectionToStartMouseHalf = [pStartMouseHalf[0] - mouseReflection[0], pStartMouseHalf[1] - mouseReflection[1]];
            // const vMouseReflectionToEndMouseHalf = [pEndMouseHalf[0] - mouseReflection[0], pEndMouseHalf[1] - mouseReflection[1]];

            // vStartMouseHalfToCenter = [x - pStartMouseHalf[0], y - pStartMouseHalf[1]];
            // vEndMouseHalfToCenter = [x - pEndMouseHalf[0], y - pEndMouseHalf[1]];
            //
            // (x - pStartMouseHalf[0]) * vMouseReflectionToStartMouseHalf[0] + (y - pStartMouseHalf[1])  * vMouseReflectionToStartMouseHalf[1] = 0
            // (x - pEndMouseHalf[0]) * vMouseReflectionToEndMouseHalf[0] +  (y - pEndMouseHalf[1]) * vMouseReflectionToEndMouseHalf[1] = 0
            //
            // (x - pStartMouseHalf[0]) * vMouseReflectionToStartMouseHalf[0] + (y - pStartMouseHalf[1])  * vMouseReflectionToStartMouseHalf[1] = 0
            // (x - pEndMouseHalf[0]) * vMouseReflectionToEndMouseHalf[0] +  (y - pEndMouseHalf[1]) * vMouseReflectionToEndMouseHalf[1] = 0



            /**
             * (x - startToMouseReflectionHalf[0]) * vMousereflectionToStart[0] = (y - startToMouseReflectionHalf[1]) * vMousereflectionToStart[1]
             * (x - endToMouseReflectionHalf[0]) * vMousereflectionToEnd[0] = (y - endToMouseReflectionHalf[1]) * vMousereflectionToEnd[1]
             */



            /**
             * pNewCenter = [x, y];
             * vMousereflectiontoStartHalfToNewpoint = [x - vMousereflectionToStartHalf[0], y - vMousereflectionToStartHalf[1]];
             * vMousereflectiontoEndHalfToNewpoint = [x - vMousereflectionToEndHalf[0], y - vMousereflectionToEndHalf[1]];
             * vMousereflectionToStartHalf[0] * x + vMousereflectionToStartHalf[1] * y = vMousereflectionToStartHalf[1] ** 2 + vMousereflectionToStartHalf[0] ** 2
             * vMousereflectionToEndHalf[0] * x + vMousereflectionToEndHalf[1] * y = vMousereflectionToEndHalf[1] ** 2 + vMousereflectionToEndHalf[0] ** 2
             * 
             * vMousereflectionToStartHalf[0] * x + vMousereflectionToStartHalf[1] * y = vMousereflectionToStartHalf[1] ** 2 + vMousereflectionToStartHalf[0] ** 2
             * x  = (vMousereflectionToEndHalf[1] ** 2 + vMousereflectionToEndHalf[0] ** 2 - vMousereflectionToEndHalf[1] * y) / vMousereflectionToEndHalf[0]
             * 
             * vMousereflectionToStartHalf[0] * (vMousereflectionToEndHalf[1] ** 2 / vMousereflectionToEndHalf[0] + vMousereflectionToEndHalf[0] ** 2 / vMousereflectionToEndHalf[0] - vMousereflectionToEndHalf[1] * y / vMousereflectionToEndHalf[0]) + vMousereflectionToStartHalf[1] * y = vMousereflectionToStartHalf[1] ** 2 + vMousereflectionToStartHalf[0] ** 2
             * y = (vMousereflectionToStartHalf[0] * (vMousereflectionToEndHalf[1] ** 2 / vMousereflectionToEndHalf[0] + vMousereflectionToEndHalf[0] ** 2 / vMousereflectionToEndHalf[0]) - vMousereflectionToStartHalf[1] ** 2 + vMousereflectionToStartHalf[0] ** 2) / (vMousereflectionToStartHalf[0] * vMousereflectionToEndHalf[1] / vMousereflectionToEndHalf[0] + vMousereflectionToStartHalf[1])
             */

            // console.log(vMousereflectionToStartHalf[0] * vMousereflectionToEndHalf[1] / vMousereflectionToEndHalf[0], vMousereflectionToStartHalf[1])


            /**
             * pNewCenter = [x, y];
             * vMousereflectionToNewCenter = [x - mouseReflection[0], y - mouseReflection[1]]
             * vMousereflectionToStartHalfToNewCenter = [x - vMousereflectionToStartHalf[0], y - vMousereflectionToStartHalf[1]]
             * vMousereflectionToStartHalf + vMousereflectionToStartHalfToNewCenter = vMousereflectionToNewCenter;
             * [vMousereflectionToStartHalf[0], vMousereflectionToStartHalf[1]] + [x - vMousereflectionToStartHalf[0], y - vMousereflectionToStartHalf[1]] = [x - mouseReflection[0], y - mouseReflection[1]]
             */



            // console.warn(mouseReflection)
            // console.log(center, newPointRotated, mouseReflection);
            // console.log(theObject.object.Visual.ctx);
            // let ctx = theObject.object.Visual.ctx;
            // ctx.fillStyle = 'black';
            // ctx.fillRect(mouseReflection[0], mouseReflection[1], 12, 12);

            // object.sys.centerPoint = mouseReflection;
            /**
             * VCenterArcCenter ⊥ vMousePoint
             * vCenterPoint ∥ VCenterArcCenter
             */
            // const vCenterArcCenter = [object.sys.centerPoint[0] - object.center[0], object.sys.centerPoint[1] - object.center[1]];
            // vMousePoint = [x-mouse[0],y - mouse[1]];
            //
            // vCenterPoint = [x-object.center[0],y-object.center[1]]
            // (x - object.center[0]) * vCenterArcCenter[1] - (y - object.center[1]) * vCenterArcCenter[0] = 0
        }
        // console.log(subtype);
    } else {
        // console.log('----')
        const needBoundaryCheck = object.userSet.boundaryCheck;

        if (needBoundaryCheck) {
            const pixelRatio = (window.devicePixelRatio || 1);
            const maxBound = [
                object.Visual.canvas.width / pixelRatio,
                object.Visual.canvas.height / pixelRatio,
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


        let useStart = object.startArc;
        if (object.startArc > object.endArc) {
            useStart -= Math.PI * 2;
        }
        object.sys = {
            outBox: {
                xMin: object.center[0] - object.radius - 20,
                xMax: object.center[0] + object.radius + 20,
                yMin: object.center[1] - object.radius - 20,
                yMax: object.center[1] + object.radius + 20,
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
                (object.radius * Math.cos(useStart + (object.endArc - useStart) / 2)),
                object.center[1] +
                (object.radius * Math.sin(useStart + (object.endArc - useStart) / 2)),
            ],
        };
    }
}