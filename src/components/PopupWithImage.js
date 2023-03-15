import {Popup} from '../components/Popup.js';

export class PopupWithImage extends Popup{
  constructor (popupSelector) {
    super (popupSelector);
    this._picture = this._popup.querySelector('.popup__picture');
    this._location = this._popup.querySelector('.popup__location');
  }
  openPopup (name, link) {
    this._picture.src =link;
    this._picture.alt = name;
    this._location.textContent = name;
    super.openPopup();
  }
} 