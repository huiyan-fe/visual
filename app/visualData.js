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
}

export default Data;