import {Popup} from '../components/Popup.js';

export class PopupWithForm extends Popup{
  constructor (popupSelector, {handleFormSubmit}) {
   super (popupSelector);
   
   this._form = this._popup.querySelector('.popup__forms');
   this._inputs = this._popup.querySelectorAll('.popup__form');
   this._handleFormSubmit = handleFormSubmit,
   this._submitButton = this._popup.querySelector('.popup__button'),
   this._buttonMessage = this._submitButton.textContent;
  }
  _getInputValues () {
    this._formValues = {};
    this._inputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
      return this._formValues;
  }
  setEventListeners () {
    super.setEventListeners();   
    this._form.addEventListener('submit', (evt) => { 
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues())
    });
  }
  closePopup() {
    super.closePopup();
    this._form.reset();
  }
  loading(isLoading){
    if(isLoading){
      this._submitButton.textContent = "Сохранение...";
    }else{
      this._submitButton.textContent = this._buttonMessage;
  }}
} 