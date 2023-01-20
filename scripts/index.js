
const popupElement = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupCloseBtnElement = document.querySelectorAll('.popup__close');
const popupOpenBtnElement = document.querySelector('.profile__edit-button');
const popupSubmitBtnElement = document.querySelector('.popup__button_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const cardImage = document.querySelector('.card__image');
const popupAddOpenBtn = document.querySelector('.profile__add-button');
const popupAddSubmitBtn = document.querySelector('.popup__button_type_add');

//Функция открытия попапа
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
};

//Функция закрытия попапа
function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
};
popupOpenBtnElement.addEventListener('click', function (){ openPopup(popupEdit)});
popupAddOpenBtn.addEventListener('click', function (){ openPopup(popupAdd)});

popupCloseBtnElement.forEach(button => {
    button.addEventListener('click', function(evt) {
        const currentPopup = evt.target.closest('.popup');
        closePopup(currentPopup);
    });
});

// Добавление профайла.Находим форму в DOM
const formElement = document.querySelector('.popup__forms');
const nameInput = formElement.querySelector('.popup__form_type_name');
const jobInput = formElement.querySelector('.popup__form_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

// Обработчик «отправки» формы профиля
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closePopup(popupEdit);
};
formElement.addEventListener('submit', handleFormSubmit);

//Добавление 6 карточек
const card = document.querySelector('.card');
const cardLocation = document.querySelector('.card__location');
const cardsContainer = document.querySelector('.cards__container');
const cardTemplate = document.querySelector('#cards-template').content;
const cards = document.querySelector('.cards');
const imageInput = document.querySelector('.popup__form_type_image');
const placeInput = document.querySelector('.popup__form_type_place');
const formAddElement = document.querySelector('.popup__forms_type_add');
const likeButton = document.querySelectorAll('.card__like-button');
const trashButton = document.querySelector('.card__basket');
//Массив
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
//Функция лайка
function like (evt) { 
   evt.target.classList.toggle('card__like-button_active');
}; 

//Функция удаления карточки
function removeCard(evt) {
   const deleteCard = evt.target.closest('.card');
   deleteCard.remove();
}

//Функция открытия изображения
const popupImage = document.querySelector('.popup_type_image');
const popupPicture = document.querySelector('.popup__picture');
const popupLocation = document.querySelector('.popup__location');

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
//создание карточки из формы
const handleFormSave = (evt) => {
    evt.preventDefault();
    cardsContainer.prepend(creatNewCard({name: placeInput.value, link: imageInput.value, alt: placeInput.value}));
    closePopup(popupAdd);
};
formAddElement.addEventListener('submit', handleFormSave);