import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {profileName, profileAbout, nameInput,
  jobInput, formEditElement, formAddElement, profileOpenButton, cardAddButton,
  initialCards, formValidationConfig} from '../utils/constants.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import '../pages/index.css'

fetch('https://mesto.nomoreparties.co/v1/cohort-62/cards', {
  headers: {
    authorization: 'f25ed207-d78c-464d-b0ee-85c791005c08'
  }
  
})
  .then(res => res.json())
  .then((data) => {
    console.log(data);
  });
 // fetch ('https://mesto.nomoreparties.co/v1/cohort-62/users/me')


//Функция открытия изображения
const popupImage = new PopupWithImage('.popup_type_image');
popupImage.setEventListeners();

export const handleCardClick = (name, link) => {
  popupImage.openPopup(name, link);
  };
//создание карточек

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

const popupWithFormProfile = new PopupWithForm('.popup_type_edit', (data) =>{
  userInfo.setUserInfo(
    data.popupProfileName, 
    data.popupProfileAbout);
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

  const popupWithFormAdd = new PopupWithForm('.popup_type_add', 
     (data) => {
      cardsList.setItem(createCard({
        name: data.popupPlace,
        link: data.popupPlaceLink
      }));
      popupWithFormAdd.closePopup();
    }
   );
  
cardAddButton.addEventListener('click', ()=>{ 
  popupWithFormAdd.openPopup();
  formAddValidator.resetValidation();
});
popupWithFormAdd.setEventListeners();

//валидация форм

const formProfileValidator = new FormValidator(formValidationConfig, formEditElement);
const formAddValidator = new FormValidator(formValidationConfig, formAddElement);
 
formProfileValidator.enableValidation();
formAddValidator.enableValidation();






/* const formValidators = {}

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, config)
// получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')

   // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation(config);
 
//И теперь можно использовать валидаторы для деактивации кнопки и тд

formValidators[ profileForm.getAttribute('name') ].resetValidation()

// или можно использовать строку (ведь Вы знаете, какой атрибут `name` у каждой формы)
formValidators['profile-form'].resetValidation() */