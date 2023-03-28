export const popupElements = document.querySelectorAll('.popup');
export const popupElementEdit = document.querySelector('.popup_type_edit');
export const popupElementAdd = document.querySelector('.popup_type_add');
export const popupElementImage = document.querySelector('.popup_type_image');
export const popupElementUpdateAvatar = document.querySelector('.popup_type_update')

export const popupCloseButtons = document.querySelectorAll('.popup__close');
export const popupContainer = document.querySelector('.popup__container');

export const profileOpenButton = document.querySelector('.profile__edit-button');
export const cardAddButton = document.querySelector('.profile__add-button');

export const formElements = document.querySelectorAll('.popup__forms');

export const nameInput = document.querySelector('.popup__form_type_name');
export const jobInput = document.querySelector('.popup__form_type_about');
export const imageInput = document.querySelector('.popup__form_type_image');
export const placeInput = document.querySelector('.popup__form_type_place');

export const profileName = document.querySelector('.profile__name');
export const profileAbout = document.querySelector('.profile__about');
export const profileImage = document.querySelector('.profile__image');
export const profileAvatar = document.querySelector('.profile__image-change');
export const cardsContainer = document.querySelector('.cards__container');
export const cardTemplate = document.querySelector('#cards-template');

export const formAddElement = document.querySelector('.popup__add');
export const formEditElement = document.querySelector('.popup__edit');
export const formEditAvatar = document.querySelector('.popup__update');

export const popupPicture = document.querySelector('.popup__picture');
export const popupLocation = document.querySelector('.popup__location');
export const inputList = Array.from(document.querySelectorAll('.popup__form'));

export const initialCards = [
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
export const formValidationConfig = {
    formSelector: '.popup__forms',
    inputSelector: '.popup__form',
    buttonSelector: '.popup__button',
    buttonDisabledClass: 'popup__button_disabled',
    errorClass: 'popup__form_type_error',
    errorMessageClass: 'popup__message-error_active'
  };