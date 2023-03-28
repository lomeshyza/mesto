export class Card {
  constructor (templateSelector, {data, userId, handleCardClick, handleRemoveCard, handleLike, handleDeleteLike}){
    this._data = data,
    this._link = data.link,
    this._name = data.name,
    this._like = data.likes,
    
    this._userId = userId,
    this._cardId = data._id,
    this._ownerId = data.owner._id,
    this._templateSelector = templateSelector,
    this._handleCardClick = handleCardClick
    
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image');
    this._cardLocation = this._element.querySelector('.card__location');
    this._cardBasket = this._element.querySelector('.card__basket');
    this._cardLikeBtn = this._element.querySelector('.card__like-button');
    this._likesCounter = this._element.querySelector('.card__like-counter')
    
    this._handleRemoveCard = handleRemoveCard;
    this._handleLike = handleLike;
    this._handleDeleteLike = handleDeleteLike;
  }
  _getTemplate () {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    return cardElement;
  }
  toggleLike (data) { 
    this._likesCounter.textContent = data.likes.length;
    this._cardLikeBtn.classList.toggle('card__like-button_active');
  }; 
  _isLiked(){
    this._data.likes.forEach((user=>{
      if(user._id === this._userId){
        this._cardLikeBtn.classList.add('card__like-button_active');
      }
    }))
  }
  removeCard () {
    this._element.remove();
    this._element = null;
  };
  generateCard () {
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardLocation.textContent = this._name;
    this._likesCounter.textContent = this._like.length;

    this._handleBasket();
    this._isLiked();
    return this._element;
  }

  _handleBasket(){
    if(this._ownerId !== this._userId){
      this._cardBasket.remove()
    }
  }
  _setEventListeners () {
    this._cardLikeBtn.addEventListener('click', () => {
      if(this._cardLikeBtn.classList.contains('card__like-button_active')){
        this._handleDeleteLike(this._cardId);
      }else{
        this._handleLike(this._cardId);
      }
    });
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    this._cardBasket.addEventListener('click', () => this._handleRemoveCard(this._cardId));
  }
}