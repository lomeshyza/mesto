//отвечает за открытие и закрытие попапа
export class Popup {
  constructor (popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
  openPopup () {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closeByEscape);
  }
  closePopup() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closeByEscape);
  }
  _closeByEscape = (evt) =>{
        if (evt.key === 'Escape') {
        this.closePopup();
      };
  }
  setEventListeners(){
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
        this.closePopup();
      } 
    });  
  }
}