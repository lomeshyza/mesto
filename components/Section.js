//import {createCard} from '../pages/index.js';
//отвечает за отрисовку элементов на странице
//import {popupElements} from '../utils/constants.js';

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
