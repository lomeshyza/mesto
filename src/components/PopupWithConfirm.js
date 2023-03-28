import {Popup} from '../components/Popup.js';

export class PopupWithConfirm extends Popup{
  constructor (popupSelector) {
   super (popupSelector);
   this._form = this._popup.querySelector('.popup__forms');
   this._confirmButton = document.querySelector('.popup__button_type_confirm');
  }
  callback(functions){
    this._handleSubmit = functions;
  }
   setEventListeners () {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => { 
      evt.preventDefault();
      this._handleSubmit();
      });
  }
}  