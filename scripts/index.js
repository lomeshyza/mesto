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
const cardTemplate = document.querySelector('#cards-template').content;

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

//Функция очистки формы
function resetErrors(popup){
    Array.from(popup.querySelectorAll('.popup__form')).forEach(function(element){
      element.classList.remove('popup__form_type_error');
    });
    Array.from(popup.querySelectorAll('.popup__message-error')).forEach(function(element){
      element.classList.remove('popup__message-error_active');
      element.textContent = '';
    });
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
      if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup);
      }
      if (evt.target.classList.contains('popup__close')) {
        closePopup(popup);
      };
  });
}); 

//Закрытие попапа нажатием на Esc
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

//Функция лайка
function toggleLike (evt) { 
  evt.target.classList.toggle('card__like-button_active');
}; 

//Функция удаления карточки
function removeCard(evt) {
  const deleteCard = evt.target.closest('.card');
  deleteCard.remove();
};
//Функция открытия изображения
function handleCardClick(item){
  popupPicture.src = item.querySelector('.card__image').src;
  popupPicture.alt = item.querySelector('.card__location').textContent;
  popupLocation.textContent = item.querySelector('.card__location').textContent;
  openPopup(popupElementImage);
 };
//Функция создания карточки




initialCards.forEach(item => {
  const card = new Card(item.link, item.name);
  const cardElement = card.generateCard();
  cardsContainer.append(cardElement);
  
});
  //функция создания карточки из формы
handleCardFormSubmit = (evt) => {
  evt.preventDefault();
  const card = new Card(imageInput.value, placeInput.value, placeInput.value);
  const cardElement = card.generateCard();
  cardsContainer.prepend(cardElement);
   
  formAddElement.reset();
  closePopup(popupElementAdd);
};

//слушатели
profileOpenButton.addEventListener('click', function (){
  openPopupEdit();
  resetErrors(popupElementEdit);
});
cardAddButton.addEventListener('click', function (){ 
  openPopup(popupElementAdd);
});

formAddElement.addEventListener('submit', handleCardFormSubmit);




/* const creatNewCard = (item) => {
//клонировали пустой шаблон
  const initialCardsElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = initialCardsElement.querySelector('.card__image');
//присвоили значения из массива
  cardImage.src = item.link;
  cardImage.alt = item.name;
  initialCardsElement.querySelector('.card__location').textContent = item.name;
//повесили слушатели лайк, удаление, открытие картинки
  initialCardsElement.querySelector('.card__like-button').addEventListener('click', toggleLike);
  initialCardsElement.querySelector('.card__basket').addEventListener('click', removeCard);
  cardImage.addEventListener('click', () => handleCardClick(initialCardsElement));
  return initialCardsElement;
};
initialCards.forEach(initialCardsElement => {
  cardsContainer.append(creatNewCard(initialCardsElement));
});*/

/* //функция создания карточки из формы
const handleCardFormSubmit = (evt) => {
  evt.preventDefault();
  cardsContainer.prepend(creatNewCard({
    name: placeInput.value, 
    link: imageInput.value, 
    alt: placeInput.value
  }));
  formAddElement.reset();
  closePopup(popupElementAdd);
};

//слушатели
profileOpenButton.addEventListener('click', function (){
  openPopupEdit();
  resetErrors(popupElementEdit);
});
cardAddButton.addEventListener('click', function (){ 
  openPopup(popupElementAdd);
});

formAddElement.addEventListener('submit', handleCardFormSubmit);  */









/* const popupElements = document.querySelectorAll('.popup');
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
const cardTemplate = document.querySelector('#cards-template').content;

const formAddElement = document.querySelector('.popup__add');

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

//Функция очистки формы
function resetErrors(popup){
    Array.from(popup.querySelectorAll('.popup__form')).forEach(function(element){
      element.classList.remove('popup__form_type_error');
    });
    Array.from(popup.querySelectorAll('.popup__message-error')).forEach(function(element){
      element.classList.remove('popup__message-error_active');
      element.textContent = '';
    });
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
      if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup);
      }
      if (evt.target.classList.contains('popup__close')) {
        closePopup(popup);
      };
  });
}); 

//Закрытие попапа нажатием на Esc
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

//Функция лайка
function toggleLike (evt) { 
  evt.target.classList.toggle('card__like-button_active');
}; 

//Функция удаления карточки
function removeCard(evt) {
  const deleteCard = evt.target.closest('.card');
  deleteCard.remove();
};
//Функция открытия изображения
function handleCardClick(item){
  popupPicture.src = item.querySelector('.card__image').src;
  popupPicture.alt = item.querySelector('.card__location').textContent;
  popupLocation.textContent = item.querySelector('.card__location').textContent;
  openPopup(popupElementImage);
 };
//Функция создания карточки
const creatNewCard = (item) => {
//клонировали пустой шаблон
  const initialCardsElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = initialCardsElement.querySelector('.card__image');
//присвоили значения из массива
  cardImage.src = item.link;
  cardImage.alt = item.name;
  initialCardsElement.querySelector('.card__location').textContent = item.name;
//повесили слушатели лайк, удаление, открытие картинки
  initialCardsElement.querySelector('.card__like-button').addEventListener('click', toggleLike);
  initialCardsElement.querySelector('.card__basket').addEventListener('click', removeCard);
  cardImage.addEventListener('click', () => handleCardClick(initialCardsElement));
  return initialCardsElement;
};
initialCards.forEach(initialCardsElement => {
  cardsContainer.append(creatNewCard(initialCardsElement));
});

//функция создания карточки из формы
const handleCardFormSubmit = (evt) => {
  evt.preventDefault();
  cardsContainer.prepend(creatNewCard({
    name: placeInput.value, 
    link: imageInput.value, 
    alt: placeInput.value
  }));
  formAddElement.reset();
  closePopup(popupElementAdd);
};

//слушатели
profileOpenButton.addEventListener('click', function (){
  openPopupEdit();
  resetErrors(popupElementEdit);
});
cardAddButton.addEventListener('click', function (){ 
  openPopup(popupElementAdd);
});

formAddElement.addEventListener('submit', handleCardFormSubmit);  */