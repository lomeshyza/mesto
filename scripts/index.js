
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
function openPopup(popupElement){
    popupElement.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
}
//Функция закрытия попапа
function closePopup(popupElement){
    popupElement.classList.remove('popup_opened');
}

popupOpenBtnElement.addEventListener('click', function (){ openPopup(popupEdit)});
popupAddOpenBtn.addEventListener('click',function (){ openPopup(popupAdd)});

popupCloseBtnElement.forEach(button =>{
    button.addEventListener('click', function(evt){
        const currentPopup =evt.target.closest('.popup');
        closePopup(currentPopup);
    })
});

// Добавление профайла.Находим форму в DOM

let formElement = document.querySelector('.popup__forms');
let nameInput = formElement.querySelector('.popup__form_type_name');
let jobInput = formElement.querySelector('.popup__form_type_about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

// Обработчик «отправки» формы профиля
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closePopup(popupEdit);
}

formElement.addEventListener('submit', handleFormSubmit);

//Добавление 6 карточек
let card = document.querySelector('.card');
let cardLocation = document.querySelector('.card__location');
const cardsContainer = document.querySelector('.cards__container');
const cardTemplate =document.querySelector('#cards-template').content;
const cards = document.querySelector('.cards');
let imageInput = document.querySelector('.popup__form_type_image');
let placeInput = document.querySelector('.popup__form_type_place');
const formAddElement = document.querySelector('.popup__forms_type_add');
let likeButton = document.querySelectorAll('.card__like-button');
let trashButton = document.querySelector('.card__basket');

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
//Функция лайка работает
function like (evt) { 
   evt.target.classList.toggle('card__like-button_active');
}; 
//Функция удаления карточки работает
function removeCard(evt) {
   const deleteCard =  evt.target.closest('.card');
   deleteCard.remove();
}
//Функция открытия изображения
const popupImage = document.querySelector('.popup_type_image');
const popupPicture = document.querySelector('.popup__picture');
const popupLocation = document.querySelector('.popup__location');

/* const imageOpen = (cardLocation) =>{
    const cardElementImage = card.querySelector('.card__image');

    function PopupImageOpen(evt){
        openPopup(popupImage);
        popupPicture.src=evt.currentTarget.closest('.card__image').src;
        popupLocation.textContent=evt.currentTarget.closest('.card__location').textContent;
    }
}; */

function openImage(evt){
    const cardToOpen =  evt.target.closest('.card');
    popupPicture.src= cardToOpen.querySelector('.card__image').src;
    popupLocation.textContent = cardToOpen.querySelector('.card__location').textContent;

    openPopup(popupImage);
};
//Функция добавления 6 первых карт из массива -работает
initialCards.forEach(function(item){
    
    let initialCardsElement = cardTemplate.querySelector('.card').cloneNode(true);
    initialCardsElement.querySelector('.card__image').src = item.link;
    initialCardsElement.querySelector('.card__image').alt = item.name;
    initialCardsElement.querySelector('.card__location').textContent = item.name;

    initialCardsElement.querySelector('.card__like-button').addEventListener('click', like);
    initialCardsElement.querySelector('.card__basket').addEventListener('click', removeCard);
    initialCardsElement.querySelector('.card__image').addEventListener('click', openImage);
    
    cardsContainer.append(initialCardsElement);
})
//Добавление новой карточки 1 works

function handleFormSave(evt) {
    evt.preventDefault();
    
    let initialCardsElement = cardTemplate.querySelector('.card').cloneNode(true);
    initialCardsElement.querySelector('.card__image').src = imageInput.value;;
    initialCardsElement.querySelector('.card__image').alt = placeInput.value;
    initialCardsElement.querySelector('.card__location').textContent = placeInput.value;
    
    initialCardsElement.querySelector('.card__like-button').addEventListener('click', like);
    initialCardsElement.querySelector('.card__basket').addEventListener('click', removeCard);
    initialCardsElement.querySelector('.card__image').addEventListener('click', openImage);

    cardsContainer.prepend(initialCardsElement);
   
    closePopup(popupAdd);
    return initialCardsElement;
};
formAddElement.addEventListener('submit', handleFormSave);

/* вариант отрисовки первых 6 
function renderCards(cards){
    for(let i=0;i<cards.length;i++){
        const createCards=createCard(initialCards[i].link, initialCards[i].name);
        cardsContainer.append(createCards);
    }
} 
renderCards(initialCards); */

//Добавление новой карточки 2 works

/* function handleFormSave (evt) {
    
    evt.preventDefault();
    const newCard = cardTemplate.querySelector('.card').cloneNode(true);
      
    newCard.querySelector('.card__image').src=imageInput.value;
    newCard.querySelector('.card__image').alt=placeInput.value;
    newCard.querySelector('.card__location').textContent=placeInput.value;

    cardsContainer.prepend(newCard);

    closePopup(popupAdd);
    return newCard;
}

formAddElement.addEventListener('submit', handleFormSave);  */
