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
    this.data = new Data(data, this);
    this.sysData = {};
    //
    this.draw();
    //
    this.initEvent();
  }

  initEvent() {
    const canvas = this._.canvas;

    const emit = (type, data) => {
      const vEvents = this._.events && this._.events[type];
      Object.keys(vEvents).forEach((id) => {
        if (vEvents[id]) {
          vEvents[id](data);
        }
      });
    };

    canvas.addEventListener('mousemove', (e) => {
      const ctx = this._.ctx;
      const data = this.data.get();
      const match = VMath.match([e.offsetX, e.offsetY], data);
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      //
      if (match.length >= 1) {
        const matchInfo = match[0];
        const point = match[0].projection;

        emit('mousemove', {
          point,
          length: matchInfo.length,
          data: matchInfo.data,
        });

        this.sysData.lineProjection = [{
          type: Visual.circle,
          points: [point],
        }];
      } else {
        this.sysData.lineProjection = [];
      }
      //
      this.draw();
    });

    canvas.addEventListener('mouseleave', () => {
      console.log('ml');
    });

    canvas.addEventListener('click', (e) => {
      const ctx = this._.ctx;
      const data = this.data.get();
      const match = VMath.match([e.offsetX, e.offsetY], data);
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      if (match.length >= 1) {
        const matchInfo = match[0];
        const point = match[0].projection;

        this.sysData.lineProjection = [{
          type: Visual.circle,
          points: [point],
        }];
        //
        emit('click', {
          point,
          length: matchInfo.length,
          data: matchInfo.data,
        });
      } else {
        delete this.sysData.lineProjection;
      }

      //
      this.draw();
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

  draw() {
    const drawFn = (theData) => {
      switch (theData.type) {
        case Visual.line:
          Canvas.drawLine(this._.ctx, theData.paths);
          break;
        case Visual.circle:
          Canvas.drawPoint(this._.ctx, theData.points);
          break;
        default:
      }
    };
    //
    const data = this.data.get();
    data.forEach(drawFn);
    //
    const sysData = this.sysData;
    Object.keys(sysData).forEach((key) => {
      sysData[key].forEach(drawFn);
    });
  }
}

Visual.line = Symbol('line');
Visual.circle = Symbol('circle');

global.Visual = Visual;