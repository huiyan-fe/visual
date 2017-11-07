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
            switch (datas.type) {
                case Config.objectTypes.line:
                    // for line
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
            res[0].data.isActive = res[0];
            console.log('res');
            console.log(res);
        }
        return res;
    },
};


export default MathTool;