/* globals window */

import MatchTool from './visual-match';

const Event = self => {
    const canvas = self.canvas;
    const datas = self.sys.objects;
    let mousedownPos = [];
    let hoveredObj = [];
    let pickupedObj = [];

    window.addEventListener('mousemove', e => {
        if (pickupedObj.length === 0) {
            hoveredObj = MatchTool.match([e.offsetX, e.offsetY], self.sys.objects);
        } else {
            const movedPos = [e.offsetX - mousedownPos[0], e.offsetY - mousedownPos[1]];
            const snapShootPath = pickupedObj[0].pathSnapshoot;

            let newPath = [];
            const isMoveSingle = (pickupedObj[0].origin.type === 'point') && (pickupedObj[0].origin.length < 10);
            if (isMoveSingle) {
                const singleIndex = pickupedObj[0].origin.index;
                const path = pickupedObj[0].origin.data.path;
                path[singleIndex][0] = snapShootPath[singleIndex][0] + movedPos[0];
                path[singleIndex][1] = snapShootPath[singleIndex][1] + movedPos[1];
            } else {
                newPath = snapShootPath.map(item => {
                    let x = item[0];
                    let y = item[1];
                    x += movedPos[0];
                    y += movedPos[1];
                    return [x, y];
                });
                pickupedObj[0].origin.data.path = newPath;
            }
            e.preventDefault();
        }
        self.draw();
    });

    canvas.addEventListener('mousedown', e => {
        if (hoveredObj.length >= 1) {
            pickupedObj = [{
                pathSnapshoot: JSON.parse(JSON.stringify(hoveredObj[0].data.path)),
                origin: Object.assign(hoveredObj[0]),
            }];
            mousedownPos = [e.offsetX, e.offsetY];
        }
    });

    window.addEventListener('mouseup', () => {
        pickupedObj = [];
        mousedownPos = [];
    });
};

export default Event;