//отвечает за отрисовку элементов на странице

export class Section {
   constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  setItem(element) {
    this._container.prepend(element);
 }
  clear() {
    this._container.innerHTML = '';
  }
  rendererItems(items) {
    this.clear();
    items.forEach((item) => {
      this._renderer(item);
    });
  } 
}
