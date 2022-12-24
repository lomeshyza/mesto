const popupElement=document.querySelector('.popup');
const popupCloseBtnElement=popupElement.querySelector('.popup__close');
const popupOpenBtnElement=document.querySelector('.profile__edit-button');
const popupSubmitBtnElement=popupElement.querySelector('.popup__button');

/*
const togglePopupVisibility=function(){
    popupElement.classList.toggle('popup_opened');
}*/
const openPopup=function(){
    popupElement.classList.add('popup_opened');
    nameInput.value=profileName.textContent;
    jobInput.value=profileAbout.textContent;
}
const closePopup=function(){
    popupElement.classList.remove('popup_opened');
}

popupOpenBtnElement.addEventListener('click',openPopup);
popupCloseBtnElement.addEventListener('click',closePopup);
popupSubmitBtnElement.addEventListener('click',closePopup);


// Находим форму в DOM

let formElement = document.querySelector('.popup__forms');

let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent=nameInput.value;
    profileAbout.textContent=jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit);
