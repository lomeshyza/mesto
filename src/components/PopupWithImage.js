import {Popup} from '../components/Popup.js';
import {popupPicture,popupLocation} from '../utils/constants.js';

export class PopupWithImage extends Popup{
  constructor (popupSelector) {
    super (popupSelector);
  }
  openPopup (name, link) {
    popupPicture.src =link;
    popupPicture.alt = name;
    popupLocation.textContent = name;
    super.openPopup();
  }
} 