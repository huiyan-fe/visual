import Config from './visualConfig';
import Data from './visualData';

class Visual {
  constructor(canvas, datas, config) {
    const conf = config || Array.isArray(datas) ? {} : datas;
    const data = Array.isArray(datas) ? datas : [];

    this._ = {};
    this._.canvas = canvas;
    this._.ctx = canvas.getContext('2d');

    this.config = new Config(conf);
    this.data = new Data(data);
    this.initEvent();
  }

  initEvent() {
    const canvas = this._.canvas;
    canvas.addEventListener('mousemove', () => {
      this.update();
    });
    canvas.addEventListener('mouseleave', () => {
      console.log('ml');
    });
    canvas.addEventListener('click', () => {
      console.log('ck');
    });
  }

  update() {
    const ctx = this._.ctx;
    const data = this.data.get();
    console.log(ctx, data);
  }

}

global.Visual = Visual;