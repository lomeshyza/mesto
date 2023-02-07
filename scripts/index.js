
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


// Обработчик «отправки» формы профиля
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closePopup(popupEdit);
};
formElement.addEventListener('submit', handleFormSubmit);


//Закрытие попапа по клику на фон,работает
/* function stopPropagation(evt) {
    evt.stopPropagation();} */

popupElement.forEach(function (element) {
    element.addEventListener('click', function(evt) {
       if (evt.target.classList.contains('popup')) {
       const currentPopup = evt.target.closest('.popup');
       //evt.stopPropagation();
       closePopup(currentPopup);
  }}); 
});

//Закрытие попапа нажатием на Esc ,работает
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
    cardsContainer.prepend(creatNewCard({name: placeInput.value, link: imageInput.value, alt: placeInput.value}));
    formAddElement.reset();
    closePopup(popupAdd);
};

//слушатели
popupOpenBtnElement.addEventListener('click', function (){openPopupEdit()});
popupAddOpenBtn.addEventListener('click', function (){ openPopup(popupAdd)});
popupCloseBtnElement.forEach(button => {
    button.addEventListener('click', function(evt) {
        const currentPopup = evt.target.closest('.popup');
        closePopup(currentPopup);
    });
});
formAddElement.addEventListener('submit', handleFormSave);

//Валидация
//const formInput = formElement.querySelector('.popup__form');
const formError = formElement.querySelector(`.${popupForm.id}-error`);


popupForm.addEventListener('input', function (evt) {
    // Выведем в консоль значение свойства validity.valid поля ввода, 
    // на котором слушаем событие input
    console.log(evt.target.validity.valid);
  }); 
// Функция, которая добавляет класс с ошибкой
const showInputError = function(formElement, popupForm, errorMessage) {
   const errorElement = formElement.querySelector(`.${popupForm.id}-error`);
   popupForm.classList.add('popup__form_type_error');
   errorElement.textContent = errorMessage;
   errorElement.classList.add('popup__form-error_active');
   console.log(errorElement);
   console.log(errorMessage);
};
// Функция, которая удаляет класс с ошибкой
const hideInputError = function(formElement, popupForm) {
    const errorElement = formElement.querySelector(`.${popupForm.id}-error`);
    popupForm.classList.remove('popup__form_type_error');
    errorElement.classList.remove('popup__form-error_active');
    errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = function(formElement, popupForm){
    if(!popupForm.validity.valid+-+98){
        showInputError(formElement, popupForm, popupForm.validationMessage);
    }else{
        hideInputError(formElement, popupForm);
    }
};
//popupForm.addEventListener('input', isValid);
//Неактивная кнопка
const hasInvalidInput = (inputList) => {
    // проходим по этому массиву методом some
    return inputList.some((popupForm) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся функция
      // hasInvalidInput вернёт true
  
      return !popupForm.validity.valid;
    })
  }; 
  
const toggleButtonState = (inputList, buttonElement) => {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      buttonElement.classList.add('popup__button_disabled');
    } else {
      // иначе сделай кнопку активной
      buttonElement.classList.remove('popup__button_disabled');
    }
  }; 

const setEventListeners = (formElement) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll('.popup__form'));
    const buttonElement = formElement.querySelector('.popup__button');
    toggleButtonState(inputList, buttonElement);
    // Обойдём все элементы полученной коллекции
    inputList.forEach((popupForm) => {
      // каждому полю добавим обработчик события input
      popupForm.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        isValid(formElement, popupForm);
        toggleButtonState(inputList, buttonElement);
      });
    });
  }; 
const enableValidation = () => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll('.popup__forms'));
  
    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
      // Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
      setEventListeners(formElement);
    });
  };
  
  // Вызовем функцию
  enableValidation(); 
  