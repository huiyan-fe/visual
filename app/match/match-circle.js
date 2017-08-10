const matchCircle = (P, datas, res) => {
    const useData = datas;
    useData.isActive = null;

    const lPC = Math.sqrt((P[0] - datas.center[0]) ** 2 + (P[1] - datas.center[1]) ** 2);
    if (lPC <= datas.redius + 5) {
        res.push({
            data: datas,
            length: lPC,
        });
    }
};

export default matchCircle;