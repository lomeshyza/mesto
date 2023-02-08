const popupElement = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupCloseBtnElement = document.querySelectorAll('.popup__close');
const popupContainer = document.querySelector('.popup__container');
const popupOpenBtnElement = document.querySelector('.profile__edit-button');
const popupAdd = document.querySelector('.popup_type_add');
const popupAddOpenBtn = document.querySelector('.profile__add-button');
const formElement = document.querySelector('.popup__forms');
const popupForm = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__form_type_name');
const jobInput = formElement.querySelector('.popup__form_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const cardsContainer = document.querySelector('.cards__container');
const cardTemplate = document.querySelector('#cards-template').content;
const imageInput = document.querySelector('.popup__form_type_image');
const placeInput = document.querySelector('.popup__form_type_place');
const formAddElement = document.querySelector('.popup__forms_type_add');
const likeButton = document.querySelectorAll('.card__like-button');
const popupImage = document.querySelector('.popup_type_image');
const popupPicture = document.querySelector('.popup__picture');
const popupLocation = document.querySelector('.popup__location');
const inputList = Array.from(formElement.querySelectorAll('.popup__form'));
const buttonElement = formElement.querySelector('.popup__button');
const formError = formElement.querySelector(`.${popupForm.id}-error`);

//Функция открытия попапа
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
};

//Функция открытия попапа редактирования
function openPopupEdit (){
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  openPopup(popupEdit);
};

//Функция закрытия попапа
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
};

//Функция очистки формы
function resetErrors(popup){
  if(popupEdit.classList.contains('popup_opened') || popupAdd.classList.contains('popup_opened')){
    Array.from(popup.querySelectorAll('.popup__form')).forEach(function(el){
      el.classList.remove('popup__form_type_error');
      el.textContent = '';
      buttonElement.classList.add('popup__button_disabled');
    });
    Array.from(popup.querySelectorAll('.popup__form-error')).forEach(function(el){
      el.classList.remove('popup__form-error_active');
      el.textContent = '';
    });
  };
};

// Обработчик «отправки» формы профиля
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup(popupEdit);
};
formElement.addEventListener('submit', handleFormSubmit);

//Закрытие попапа по клику на фон

popupElement.forEach(function (element) {
  element.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('popup')) {
    const currentPopup = evt.target.closest('.popup');
    closePopup(currentPopup);
  }}); 
});

//Закрытие попапа нажатием на Esc
document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    popupElement.forEach(function (element){
    closePopup(element)
    });
  };
});

//Функция лайка
function like (evt) { 
  evt.target.classList.toggle('card__like-button_active');
}; 

//Функция удаления карточки
function removeCard(evt) {
  const deleteCard = evt.target.closest('.card');
  deleteCard.remove();
};

//Функция открытия изображения
function openImage(evt) {
  const cardToOpen = evt.target.closest('.card');
  popupPicture.src = cardToOpen.querySelector('.card__image').src;
  popupLocation.textContent = cardToOpen.querySelector('.card__location').textContent;
  openPopup(popupImage);
};

//Функция создания карточки
const creatNewCard = (item) => {
//клонировали пустой шаблон
  const initialCardsElement = cardTemplate.querySelector('.card').cloneNode(true);
//присвоили значения из массива
  initialCardsElement.querySelector('.card__image').src = item.link;
  initialCardsElement.querySelector('.card__image').alt = item.name;
  initialCardsElement.querySelector('.card__location').textContent = item.name;
//повесили слушатели лайк, удаление, открытие картинки
  initialCardsElement.querySelector('.card__like-button').addEventListener('click', like);
  initialCardsElement.querySelector('.card__basket').addEventListener('click', removeCard);
  initialCardsElement.querySelector('.card__image').addEventListener('click', openImage);
  return initialCardsElement;
};
initialCards.forEach(initialCardsElement => {
  cardsContainer.append(creatNewCard(initialCardsElement));
});

//функция создания карточки из формы
const handleFormSave = (evt) => {
  evt.preventDefault();
  cardsContainer.prepend(creatNewCard({
    name: placeInput.value, 
    link: imageInput.value, 
    alt: placeInput.value
  }));
  formAddElement.reset();
  closePopup(popupAdd);
};

//слушатели
popupOpenBtnElement.addEventListener('click', function (){
  openPopupEdit();
  resetErrors(popupEdit);
  toggleButtonState(inputList, buttonElement);
});
popupAddOpenBtn.addEventListener('click', function (){ 
  openPopup(popupAdd);
  resetErrors(popupAdd);
  formAddElement.reset();
  toggleButtonState(inputList, buttonElement);
});
popupCloseBtnElement.forEach(button => {
  button.addEventListener('click', function(evt) {
      const currentPopup = evt.target.closest('.popup');
      closePopup(currentPopup);
  });
});
formAddElement.addEventListener('submit', handleFormSave);