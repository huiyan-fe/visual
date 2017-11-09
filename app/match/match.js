import Config from '../config/config';
import matchLine from './match-line';
import matchText from './match-text';
import matchCircle from './match-circle';
import matchPolygon from './match-polygon';

const MathTool = {
    // eventType : mousedown/mousemove/keydown
    match(P, datasGroup, eventType) {
        const res = [];

        datasGroup.forEach(datas => {
            // remove all the objects' active;
            datas.isActive = null;
            //

            switch (datas.type) {
                case Config.objectTypes.line:
                case Config.objectTypes.textGroup:
                    matchLine(P, datas, eventType, res);
                    break;
                case Config.objectTypes.text:
                    matchText(P, datas, eventType, res);
                    break;
                case Config.objectTypes.circle:
                    matchCircle(P, datas, eventType, res);
                    break;
                case Config.objectTypes.polygon:
                    matchPolygon(P, datas, eventType, res);
                    break;
                default:
                    break;
            }
        });

        res.sort((a, b) => a.length - b.length);

        if (res[0]) {
            Object.keys(res[0]).forEach(key => {
                if (key !== 'innerObject') {
                    res[0].innerObject.isActive = res[0].innerObject.isActive || {};
                    res[0].innerObject.isActive[key] = res[0][key];
                }
            });
        }
        return res;
    },
};


export default MathTool;