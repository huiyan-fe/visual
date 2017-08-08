import Config from '../config/config';
import matchLine from './match-line';
import matchText from './match-text';
import matchCircle from './match-circle';

const MathTool = {
    match(P, datasGroup) {
        const res = [];

        datasGroup.forEach(datas => {
            switch (datas.type) {
                case Config.objectTypes.line:
                    // for line
                    matchLine(P, datas, res);
                    break;
                case Config.objectTypes.text:
                    matchText(P, datas, res);
                    break;
                case Config.objectTypes.circle:
                    matchCircle(P, datas, res);
                    break;
                default:
                    break;
            }
        });

        res.sort((a, b) => a.length - b.length);

        if (res[0]) {
            res[0].data.isActive = res[0];
        }
        return res;
    },
};


export default MathTool;