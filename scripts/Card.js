 export class Card {
  constructor (link, name, templateSelector, handleCardClick){
    this._link = link,
    this._name = name,
    this._templateSelector = templateSelector,
    this._handleCardClick = handleCardClick
  }
  _getTemplate (){
     const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    return cardElement;
  }
  _toggleLike (evt) { 
    evt.target.classList.toggle('card__like-button_active');
    }; 
  //Функция удаления карточки
  _removeCard(evt) {
    const deleteCard = evt.target.closest('.card');
    deleteCard.remove();
  };
  generateCard (){
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image');
    this._cardLocation = this._element.querySelector('.card__location');
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardLocation.textContent = this._name;
    return this._element;
  }
  _setEventListeners(){
    this._cardLikeBtn = this._element.querySelector('.card__like-button');
    this._cardBasket = this._element.querySelector('.card__basket');
    this._cardLikeBtn.addEventListener('click', this._toggleLike);
    this._cardBasket.addEventListener('click', this._removeCard);
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }
  
}