
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {formValidationConfig} from '../utils/constants.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import '../pages/index.css'
import {Api} from '../components/Api.js';
import {PopupWithConfirm} from '../components/PopupWithConfirm';

const profileOpenButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');

const nameInput = document.querySelector('.popup__form_type_name');
const jobInput = document.querySelector('.popup__form_type_about');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const profileImage = document.querySelector('.profile__image');

const formAddElement = document.querySelector('.popup__add');
const formEditElement = document.querySelector('.popup__edit');
const formEditAvatar = document.querySelector('.popup__update');

  const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-62',
    headers: {
      authorization: 'f25ed207-d78c-464d-b0ee-85c791005c08',
      'Content-Type': 'application/json'
    }
  });
  let userId;
  Promise.all([api.getUserInfo(), api.getInitialCards()])
  
  .then(([profileInfo, cardsData]) => {
    userId = profileInfo._id;
    userInfo.setUserInfo(profileInfo);
    cardsList.rendererItems(cardsData);
   })
  .catch((err) => {
    console.log(err);
   });

//__________________________________________создание карточек______________________________

const cardsList = new Section({ 
  renderer: (data) => {
    const InitialCards = createCard(data);
    cardsList.addItems(InitialCards)
  }
 },'.cards__container');

export function createCard(data) {
  const card = new Card('#cards-template', {
    data:data,
    userId:userId, 
    handleCardClick:(name, link) => {
      popupImage.openPopup(name, link);
    },
    handleRemoveCard:(cardId) => {
      popupConfirm.openPopup();
      popupConfirm.callback(() => {
        api.deleteCard(cardId)
        .then(() => {
          popupConfirm.closePopup();
          card.removeCard();
        })
        .catch((err) => {
          console.log(err);
        });
      })
    },
    handleLike:(cardId) => {
      api.setLike(cardId)
      .then((data) => {
        card.toggleLike(data)
      })
      .catch((err) => {
        console.log(err);
      });
    },
    handleDeleteLike:(cardId) => {
      api.deleteLike(cardId)
      .then((data) => {
        card.toggleLike(data)
      })
      .catch((err) => {
        console.log(err);
      });
    },
  });
  return card.generateCard();
};
//Добавление новой карточки
const popupWithFormAdd = new PopupWithForm('.popup_type_add', {
  handleFormSubmit:(data) => {
    popupWithFormAdd.loading(true)
    api.addCard(data)
    .then((res) => {
      cardsList.setItem(createCard(res))
      popupWithFormAdd.closePopup();
      })
    .catch((err) => console.log(err))
    .finally (() => {
      popupWithFormAdd.loading(false)     
      });
    }
  }
);
// Попап подтверждения удаления
const popupConfirm = new PopupWithConfirm('.popup_type_confirm');

//Попап открытия изображения
const popupImage = new PopupWithImage('.popup_type_image');

function handlePopupWithFormAdd() {
  popupWithFormAdd.openPopup();
  formAddValidator.resetValidation();
} 
cardAddButton.addEventListener('click', handlePopupWithFormAdd);

popupWithFormAdd.setEventListeners();
popupConfirm.setEventListeners();
popupImage.setEventListeners();

//__________________________________________формы профиля__________________________________
const userInfo = new UserInfo(profileName, profileAbout, profileImage);

//Попап изменения инфы пользователя

const popupWithFormProfile = new PopupWithForm('.popup_type_edit', {
  handleFormSubmit: (data)=>{
    popupWithFormProfile.loading(true) 
    api.updateUserInfo(data)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupWithFormProfile.closePopup ();
      })
    .catch((err)=>console.log(err))
    .finally (()=>{
      popupWithFormProfile.loading(false)     
      });
    }}
);

//Попап обновления аватара

const popupWithFormUpdateAvatar = new PopupWithForm('.popup_type_update', {
  handleFormSubmit: (data) => {
    popupWithFormUpdateAvatar.loading(true); 
    api.addAvatar(data)
    .then((res) =>{
      userInfo.setUserInfo(res);
      popupWithFormUpdateAvatar.closePopup();
      })
    .catch((err) => {
      console.log(err);
      })
    .finally (()=>{
      popupWithFormUpdateAvatar.loading(false);     
      });
    }
  }
);
function openPopupProfile() {
  const profileInfo = userInfo.getUserInfo ();
  nameInput.value = profileInfo.name;
  jobInput.value = profileInfo.job;
  popupWithFormProfile.openPopup ();
  formProfileValidator.resetValidation ();
} 
function openPopupUpdateAvatar() {
  popupWithFormUpdateAvatar.openPopup();
  formEditAvatarValidator.resetValidation();
} 

profileOpenButton.addEventListener('click', openPopupProfile);
profileImage.addEventListener('click', openPopupUpdateAvatar);

popupWithFormProfile.setEventListeners();
popupWithFormUpdateAvatar.setEventListeners();

//___________________________________________валидация форм__________________________________

const formProfileValidator = new FormValidator(formValidationConfig, formEditElement);
const formAddValidator = new FormValidator(formValidationConfig, formAddElement);
const formEditAvatarValidator = new FormValidator(formValidationConfig, formEditAvatar)


formProfileValidator.enableValidation();
formAddValidator.enableValidation();
formEditAvatarValidator.enableValidation();


/* import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {profileName, profileAbout, nameInput,
  jobInput, formEditElement, formAddElement, profileOpenButton, cardAddButton,
  initialCards, formValidationConfig} from '../utils/constants.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import '../pages/index.css'
import {Api} from '../components/Api.js';

fetch('https://mesto.nomoreparties.co/v1/cohort-62/cards', {
  headers: {
    authorization: 'f25ed207-d78c-464d-b0ee-85c791005c08'
  }
  
})
  .then(res => res.json())
  .then((data) => {
    console.log(data);
  }); 
  const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-62',
    headers: {
      authorization: 'f25ed207-d78c-464d-b0ee-85c791005c08',
      'Content-Type': 'application/json'
    }
  });
  api.getInitialCards()
  .then((result) => {
    console.log(result); 
    // обрабатываем результат
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

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
formAddValidator.enableValidation(); */



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