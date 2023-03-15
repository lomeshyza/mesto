import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {popupElementAdd, profileName, profileAbout, placeInput, imageInput, nameInput,
  jobInput, formEditElement, formAddElement, profileOpenButton, cardAddButton,
  popupElementEdit, popupElementImage} from '../utils/constants.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import '../pages/index.css'
//Функция открытия изображения

export const handleCardClick = (name, link) => {
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

  return card.generateCard();
};
const cardsList = new Section({ 
  renderer: (data) => {
    cardsList.setItem(createCard(data))
  }
},'.cards__container');

cardsList.rendererItems(initialCards);

//  формы профиля
const userInfo = new UserInfo(profileName, profileAbout);

const popupWithFormProfile= new PopupWithForm(popupElementEdit, () =>{
  userInfo.setUserInfo();
  popupWithFormProfile.closePopup ();
  });

popupWithFormProfile.setEventListeners(); 

profileOpenButton.addEventListener('click', () => {
  const profileInfo = userInfo.getUserInfo ();
  nameInput.value = profileInfo.name;
  jobInput.value = profileInfo.job;
  popupWithFormProfile.openPopup ();
  formProfileValidator.resetValidation ();
});
 
// Форма добавления карточки

  const popupWithFormAdd = new PopupWithForm(popupElementAdd, () => {
    const newCard = {
      name: placeInput.value,
      link: imageInput.value
    } 
     const cardElement = createCard(newCard);
     cardsList.setItem(cardElement);
     popupWithFormAdd.closePopup();
   });
  
cardAddButton.addEventListener('click', ()=>{ 
  popupWithFormAdd.openPopup();
  formAddValidator.resetValidation();
});
popupWithFormAdd.setEventListeners();

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