//отвечает за открытие и закрытие попапа
export class Popup {
  constructor (popupSelector) {
    this._popupSelector = popupSelector;
  }
  openPopup () {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._closeByEscape);
    //this.setEventListeners();
  }
  closePopup() {
    this._popupSelector.classList.remove('popup_opened');

    document.removeEventListener('keydown', this._closeByEscape);
  }
  _closeByEscape = (evt) =>{
        if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        this.closePopup(openedPopup);
      };
  }
  setEventListeners(){
    this._popupSelector.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
        this.closePopup();
      } 
    });  
  }
}
