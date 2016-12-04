const Canvas = {
  drawLine(ctxParam, data, config) {
    const ctx = ctxParam;
    ctx.save();
    // config
    ctx.lineWidth = 4;
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#f8ce60';
    //
    ctx.beginPath();
    data.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point[0], point[1]);
      } else {
        ctx.lineTo(point[0], point[1]);
      }
    });
    ctx.stroke();
    ctx.restore();
  },
  drawPoint(ctxParam, data) {
    const ctx = ctxParam;
    data.forEach((point) => {
      ctx.beginPath();
      ctx.arc(point[0], point[1], 4, 0, 2 * Math.PI);
      ctx.lineWidth = 4;
      ctx.fillStyle = 'white';
      ctx.stroke();
      ctx.fill();
    });
  },
  adjust(cctxParam) {
    const ctx = cctxParam;
    const backingStore = ctx.backingStorePixelRatio || 1;
    const pixelRatio = (window.devicePixelRatio || 1) / backingStore;
    const canvasWidth = getComputedStyle(ctx.canvas).width;
    const canvasHeight = getComputedStyle(ctx.canvas).height;
    ctx.canvas.width = parseInt(canvasWidth, 10) * pixelRatio;
    ctx.canvas.height = parseInt(canvasHeight, 10) * pixelRatio;
    ctx.canvas.style.width = canvasWidth;
    ctx.canvas.style.height = canvasHeight;
    ctx.scale(pixelRatio, pixelRatio);
  },
};

export default Canvas;