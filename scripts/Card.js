const initialCards = [
    { 
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  class Card {
  constructor (link, name){
    this._link = link,
    this._name = name
  }
  _getTemplate (){
    const cardElement = document
    .querySelector('#cards-template')
    .content
    .querySelector('.card')
    .cloneNode(true);
    return cardElement;
  }
  generateCard (){
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._name;
    this._element.querySelector('.card__location').textContent = this._name;
    return this._element;
  }
  _setEventListeners(){
    this._element.querySelector('.card__like-button').addEventListener('click', toggleLike);
    this._element.querySelector('.card__basket').addEventListener('click', removeCard);
    this._element.querySelector('.card__image').addEventListener('click', () => handleCardClick(this._element));
  }
  
}