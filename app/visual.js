import Config from './visualConfig';
import Data from './visualData';
import Canvas from './visualCanvas';
import VMath from './visualMath';

class Visual {
  constructor(canvas, datas, config) {
    const conf = config || Array.isArray(datas) ? {} : datas;
    const data = Array.isArray(datas) ? datas : [];

    this._ = {};
    this._.canvas = canvas;
    const ctx = this._.ctx = canvas.getContext('2d');
    Canvas.adjust(ctx);

    this.config = new Config(conf);
    this.data = new Data(data);
    Canvas.drawLine(ctx, data);
    this.initEvent();
  }

  initEvent() {
    const canvas = this._.canvas;
    canvas.addEventListener('mousemove', (e) => {
      const vEvents = this._.events && this._.events.mousemove;
      const ctx = this._.ctx;
      const data = this.data.get();
      const match = VMath.match([e.offsetX, e.offsetY], data);
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      Canvas.drawLine(ctx, data);
      if (match.length >= 1) {
        const matchInfo = match[0];
        const point = match[0].projection;
        Canvas.drawPoint(ctx, point);
        Object.keys(vEvents).forEach((id) => {
          if (vEvents[id]) {
            vEvents[id]({
              point: matchInfo.projection,
              length: matchInfo.length,
              data: data[matchInfo.index],
            });
          }
        });
      }
    });
    canvas.addEventListener('mouseleave', () => {
      console.log('ml');
    });
    canvas.addEventListener('click', (e) => {      
      const ctx = this._.ctx;
      const data = this.data.get();
      const match = VMath.match([e.offsetX, e.offsetY], data);
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      Canvas.drawLine(ctx, data);
      if (match.length >= 1) {
        const matchInfo = match[0];
        const point = match[0].projection;
        Canvas.drawPoint(ctx, point);
        const vEvents = this._.events && this._.events.click;
        Object.keys(vEvents).forEach((id) => {
          if (vEvents[id]) {
            vEvents[id]({
              point: matchInfo.projection,
              length: matchInfo.length,
              data: data[matchInfo.index],
            });
          }
        });
      }
    });
  }

  on(key, event) {
    this._.eventID = this._.eventID || 0;
    this._.eventID += 1;
    const id = this._.eventID;
    this._.events = this._.events || {};
    this._.events[key] = this._.events[key] || {};
    this._.events[key][id] = event;
    return id;
  }

  unbind(id) {
    const vEvents = this._.events;
    Object.keys(vEvents).forEach((key) => {
      const theEvents = vEvents[key];
      Object.keys(theEvents).forEach((eventId) => {
        if (eventId === id) {
          delete vEvents[key][id];
        }
      });
    });
  }
}

global.Visual = Visual;