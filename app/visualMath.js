const MathTool = {
  match(P, datasGroup) {
    const res = [];
    datasGroup.forEach((datas) => {
      datas.paths.forEach((data, index) => {
        if (index !== 0) {
          const A = datas.paths[index - 1];
          const B = datas.paths[index];
          const vAP = [P[0] - A[0], P[1] - A[1]];
          const lAP = Math.sqrt((vAP[0] ** 2) + (vAP[1] ** 2));
          const vAB = [B[0] - A[0], B[1] - A[1]];
          const lAB = Math.sqrt((vAB[0] ** 2) + (vAB[1] ** 2));
          const vPB = [B[0] - P[0], B[1] - P[1]];
          const lPB = Math.sqrt((vPB[0] ** 2) + (vPB[1] ** 2));

          const cAPAB = (vAP[0] * vAB[0]) + (vAP[1] * vAB[1]);
          const lAPAB = lAP * lAB;
          const rPAB = Math.acos(cAPAB / lAPAB);

          const cABPB = (vAB[0] * vPB[0]) + (vAB[1] * vPB[1]);
          const lABPB = lAB * Math.sqrt((vPB[0] ** 2) + (vPB[1] ** 2));
          const rPBA = Math.acos(cABPB / lABPB);

          if (rPAB < Math.PI / 2 && rPBA < Math.PI / 2) {
            const lAO = Math.cos(rPAB) * lAP;
            const pAOAB = lAO / lAB;
            const lPO = Math.sin(rPAB) * lAP;
            const O = [A[0] + (vAB[0] * pAOAB), A[1] + (vAB[1] * pAOAB)];
            if (lPO < 30) {
              res.push({
                data: datas,
                projection: O,
                length: lPO,
              });
            }
          }
          //
          if (lPB < 30) {
            res.push({
              data: datas,
              projection: B,
              length: lPB,
            });
          }

          if (lAP < 30) {
            res.push({
              data: datas,
              projection: A,
              length: lAP,
            });
          }
        }
      });
    });
    res.sort((a, b) => a.length - b.length);
    return res;
  },
};

export default MathTool;