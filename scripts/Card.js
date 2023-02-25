import {toggleLike, removeCard, handleCardClick} from './index.js';
  
export class Card {
  constructor (link, name, templateSelector){
    this._link = link,
    this._name = name,
    this._templateSelector = templateSelector
  }
  _getTemplate (){
    const cardElement = this._templateSelector
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