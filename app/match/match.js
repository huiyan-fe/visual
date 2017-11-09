import Config from '../config/config';
import matchLine from './match-line';
import matchText from './match-text';
import matchCircle from './match-circle';
import matchPolygon from './match-polygon';

const MathTool = {
    // eventType : mousedown/mousemove/keydown
    match(P, datasGroup, eventType, multichose = false) {
        const res = [];

        datasGroup.forEach(datas => {
            // remove all the objects' active;
            if (!multichose) {
                datas.isActive = null;
            } else {
                // console.log('multichose match');
            }

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

        if (res && res.length > 0) {
            // res.forEach(re => {
            //     re.data.isActive = re;
            // });
            res.length = 1;
            res[0].data.isActive = res[0];
        }
        return res;
    },
};


export default MathTool;