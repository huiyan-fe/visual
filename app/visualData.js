/**
 * Data interface
 * [
 *  {
 *    data:[[x, y],[x, y]],
 *    enable: true,
 *    action: Data.pick
 *  }
 * ]
 */
class Data {
  constructor(data) {
    this.data = data || [];
  }

  get() {
    return this.data;
  }

  set(data) {
    this.data = data;
  }
}

export default Data;