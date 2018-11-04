export default class Map {

  constructor(params) {
    this.config = Object.assign({}, {
      container: 'map',
      zoom: 14,
      apiURL: 'https://api-maps.yandex.ru/2.1/?lang=ru_RU'
    }, params);
  }
  /**
  * @see https://github.com/sergeysolovev/ymaps/blob/master/src/ymaps.js
  */
  load(src) {
    src = src || this.config.apiURL

    const getNsParamValue = () => {
      let results = RegExp('[\\?&]ns=([^&#]*)').exec(src);
      return results === null ? '' :
      decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    this.promise = this.promise || new Promise((resolve, reject) => {
      let elem = document.createElement('script');
      elem.type = 'text/javascript';
      elem.src = src;
      elem.onload = resolve;
      elem.onerror = e => reject(e)
      document.body.appendChild(elem);
    })
    .then(() => {
      const ns = getNsParamValue();
      if (ns && ns !== 'ymaps') {
        (1,eval)(`var ymaps = ${ns};`);
      }
      return new Promise(resolve => ymaps.ready(resolve));
    });

    return this.promise;
  }

  init() {
    this.load()
    .then(maps => {
      this.instance = new maps.Map('map', {
        center: this.config.center,
        zoom: this.config.zoom,
        controls: this.config.controls || []
      })
    })
  }

  addMark() {

  }
}
