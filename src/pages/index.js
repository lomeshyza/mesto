import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {popupElementAdd,profileName,profileAbout, placeInput, imageInput, nameInput, jobInput, formEditElement, formAddElement, profileOpenButton,cardAddButton, popupElementEdit, popupElementImage} from '../utils/constants.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import '../pages/index.css'
//Функция открытия изображения

export const handleCardClick = (name, link) =>{
  const popupImage = new PopupWithImage(popupElementImage);
  popupImage.openPopup(name, link);
  popupImage.setEventListeners();
  };
 
//создание карточек
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
export function createCard(data) {
  const card = new Card(data,'#cards-template', handleCardClick);
 // console.log(data.name)
  return card.generateCard();
};
const cardsList = new Section({ 
  renderer: (data) => {
    cardsList.setItem(createCard(data))
  }
},'.cards__container');

cardsList.rendererItems(initialCards);

//  формы профиля
const handelPopupWithFormProfile = ()=>{
  const popupWithFormProfile= new PopupWithForm(popupElementEdit, () =>{
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    popupWithFormProfile.closePopup();
  });
  popupWithFormProfile.setEventListeners();
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  popupWithFormProfile.openPopup();
}
profileOpenButton.addEventListener('click', ()=>{
  handelPopupWithFormProfile();
  formProfileValidator.resetValidation();
});
 
// Форма добавления карточки
export function handleCardFormSubmit () {
  const newCard = {
    name: placeInput.value,
    link: imageInput.value
  } 
  const cardElement = createCard(newCard);
  cardsList.setItem(cardElement);
};
const handelPopupWithFormAdd = ()=>{
  const popupWithFormAdd= new PopupWithForm(popupElementAdd, () =>{
     const newCard = {
       name: placeInput.value,
       link: imageInput.value
     } 
     const cardElement = createCard(newCard);
     cardsList.setItem(cardElement);
     popupWithFormAdd.closePopup();
   });
  popupWithFormAdd.setEventListeners();
  popupWithFormAdd.openPopup();
}
cardAddButton.addEventListener('click', ()=>{ 
  formAddValidator.resetValidation();
  handelPopupWithFormAdd();
});

//валидация форм
const formValidationConfig = {
  formSelector: '.popup__forms',
  inputSelector: '.popup__form',
  buttonSelector: '.popup__button',
  buttonDisabledClass: 'popup__button_disabled',
  errorClass: 'popup__form_type_error',
  errorMessageClass: 'popup__message-error_active'
};

const formProfileValidator = new FormValidator(formValidationConfig, formEditElement);
const formAddValidator = new FormValidator(formValidationConfig, formAddElement);
 
formProfileValidator.enableValidation(formValidationConfig);
formAddValidator.enableValidation(formValidationConfig);











/* import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
const popupElements = document.querySelectorAll('.popup');
const popupElementEdit = document.querySelector('.popup_type_edit');
const popupElementAdd = document.querySelector('.popup_type_add');
const popupElementImage = document.querySelector('.popup_type_image');

const popupCloseButtons = document.querySelectorAll('.popup__close');
const popupContainer = document.querySelector('.popup__container');

const profileOpenButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');

const formElements = document.querySelectorAll('.popup__forms');

const nameInput = document.querySelector('.popup__form_type_name');
const jobInput = document.querySelector('.popup__form_type_about');
const imageInput = document.querySelector('.popup__form_type_image');
const placeInput = document.querySelector('.popup__form_type_place');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const cardsContainer = document.querySelector('.cards__container');
const cardTemplate = document.querySelector('#cards-template');

const formAddElement = document.querySelector('.popup__add');
const formEditElement = document.querySelector('.popup__edit');

const popupPicture = document.querySelector('.popup__picture');
const popupLocation = document.querySelector('.popup__location');
const inputList = Array.from(document.querySelectorAll('.popup__form'));

//Функция открытия попапа
function openPopup(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

//Функция открытия попапа редактирования
function openPopupEdit (){
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  openPopup(popupElementEdit);
};
//Функция открытия изображения
function handleCardClick(name, link){
  popupPicture.src = link;
  popupPicture.alt = name;
  popupLocation.textContent = name;
  openPopup(popupElementImage);
 };
//Функция закрытия попапа
function closePopup(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};
//Закрытие попапа по клику на фон и крестику
popupElements.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
        closePopup(popup);
      }
  });
}); 
//Закрытие попапа нажатием на Esc
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};
 // Обработчик «отправки» формы профиля
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup(popupElementEdit);
};

//создание карточек
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
function createCard(data) {
  const card = new Card(data,'#cards-template', handleCardClick);
  return card.generateCard();
};
initialCards.forEach(data => {
  const cardElement = createCard(data);
  cardsContainer.append(cardElement);
});
  function handleCardFormSubmit (evt) {
  evt.preventDefault();
  const newCard = {
    name: placeInput.value,
    link: imageInput.value
  }
  const cardElement = createCard(newCard);
  cardsContainer.prepend(cardElement);
  closePopup(popupElementAdd);
};

//валидация форм
const formValidationConfig = {
  formSelector: '.popup__forms',
  inputSelector: '.popup__form',
  buttonSelector: '.popup__button',
  buttonDisabledClass: 'popup__button_disabled',
  errorClass: 'popup__form_type_error',
  errorMessageClass: 'popup__message-error_active'
};

const formProfileValidator = new FormValidator(formValidationConfig, formEditElement);
const formAddValidator = new FormValidator(formValidationConfig, formAddElement);
 
formProfileValidator.enableValidation(formValidationConfig);
formAddValidator.enableValidation(formValidationConfig);

//слушатели
profileOpenButton.addEventListener('click', function (){
  openPopupEdit();
  formProfileValidator.resetValidation();
});
cardAddButton.addEventListener('click', function (){ 
  formAddElement.reset();
  formAddValidator.resetValidation();
  openPopup(popupElementAdd);
});
popupElementEdit.addEventListener('submit', handleProfileFormSubmit);
formAddElement.addEventListener('submit', handleCardFormSubmit); */