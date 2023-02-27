import {Card} from './Card.js';
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

//Функция закрытия попапа
function closePopup(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

// Обработчик «отправки» формы профиля
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup(popupElementEdit);
};
popupElementEdit.addEventListener('submit', handleProfileFormSubmit);

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

//Функция открытия изображения
function handleCardClick(name, link){
  popupPicture.src = link;
  popupPicture.alt = name;
  popupLocation.textContent = name;
  openPopup(popupElementImage);
 };
//Функция создания карточки
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

function createCard(link, name,cardTemplate) {
  const card = new Card(link, name, cardTemplate, handleCardClick);
  return card.generateCard();
};
initialCards.forEach(item => {
 const cardElement = createCard(item.link, item.name, '#cards-template');
  cardsContainer.append(cardElement);
});
  //функция создания карточки из формы
  function handleCardFormSubmit (evt) {
  evt.preventDefault();
  const cardElement = createCard(imageInput.value, placeInput.value, '#cards-template');;
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
  formProfileValidator.resetValidation();
  openPopupEdit();
});
cardAddButton.addEventListener('click', function (){ 
  formAddValidator.resetValidation();
  openPopup(popupElementAdd);
});

formAddElement.addEventListener('submit', handleCardFormSubmit);