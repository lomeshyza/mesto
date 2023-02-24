//Валидация
const formValidationConfig = {
  formSelector: '.popup__forms',
  inputSelector: '.popup__form',
  buttonSelector: '.popup__button',
  buttonDisabledClass: 'popup__button_disabled',
  errorClass: 'popup__form_type_error',
  errorMessageClass: 'popup__message-error_active'
};

class FormValidator {
  constructor (config, form){
    this._config = config,
    this._form = form
  }
_disableSubmit(event){
    event.preventDefault();
  }
// Функция, которая добавляет класс с ошибкой
_showInputError (input) {
  const inputId = input.id;
  const errorElement = document.querySelector(`.${inputId}-error`);
  input.classList.add(this._config.errorClass);
  errorElement.classList.add(this._config.errorMessageClass);
  errorElement.textContent = input.validationMessage;
  console.log(errorElement.textContent);
};
// Функция, которая удаляет класс с ошибкой
_hideInputError (input) {
  const inputId = input.id;
  const errorElement = document.querySelector(`.${inputId}-error`);
  input.classList.remove(this._config.errorClass);
  errorElement.classList.remove(this._config.errorMessageClass);
  errorElement.textContent = '';
};

_isValid (event){
  const input = event.target;
      
  if(!input.validity.valid){
    this._showInputError(input);
  }else{
    this._hideInputError(input);
  };
};

//Функция активации/деактивации кнопок форм
_toggleButtonState () {
  const buttonSubmit = this._form.querySelector(this._config.buttonSelector);
  const isFormValid = this._form.checkValidity();
  // Если есть хотя бы один невалидный инпут
  if (!isFormValid) {
    // сделай кнопку неактивной
    buttonSubmit.classList.add(this._config.buttonDisabledClass);
    buttonSubmit.disabled = true;
  } else {
    // иначе сделай кнопку активной
    buttonSubmit.classList.remove(this._config.buttonDisabledClass);
    buttonSubmit.disabled = false;
  };
}; 
//Функция добавления обработчиков к формам
_setEventListeners () {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
  // деактивируем кнопку при 1й загрузке сайта
  this._form.addEventListener('reset', () => {
  // `setTimeout` нужен для того, чтобы дождаться очищения формы (вызов уйдет в конце стэка) 
  //и только потом вызвать `toggleButtonState`
  setTimeout(() => {
    this._toggleButtonState();
    }, 0); // достаточно указать 0 миллисекунд, чтобы после `reset` уже сработало действие
  });
  // Обойдём все элементы полученной коллекции
  inputList.forEach((item) => {
    // каждому полю добавим обработчик события 
    item.addEventListener('input', (event) => {
      // Внутри колбэка вызовем isValid, передав ей форму и проверяемый элемент
      this._isValid(event);
    },0);
  });
}; 
//Функция включения валидации форм
enableValidation () {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
 // const formsList = Array.from(document.querySelectorAll(this._config.formSelector));   
  // Переберём полученную коллекцию
  //formsList.forEach((form) => {
  // Для каждой формы вызовем функцию setEventListeners, передав ей элемент формы
  this._form.addEventListener('input',this._disableSubmit);
  this._form.addEventListener('input', () => {
    this._toggleButtonState();
    });
  this._setEventListeners();
  this._toggleButtonState();
  //});
};

}

  const formProfileValidator = new FormValidator(formValidationConfig, formEditElement);
  const formAddValidator = new FormValidator(formValidationConfig, formAddElement);
 
  formProfileValidator.enableValidation(formValidationConfig);
  formAddValidator.enableValidation(formValidationConfig);





/* //Валидация
const formValidationConfig = {
    formSelector: '.popup__forms',
    inputSelector: '.popup__form',
    buttonSelector: '.popup__button',
    buttonDisabledClass: 'popup__button_disabled',
    errorClass: 'popup__form_type_error',
    errorMessageClass: 'popup__message-error_active'
};
function disableSubmit(event){
    event.preventDefault();
}
// Функция, которая добавляет класс с ошибкой
const showInputError = function(input, config) {
    const inputId = input.id;
    const errorElement = document.querySelector(`.${inputId}-error`);
    input.classList.add(config.errorClass);
    errorElement.classList.add(config.errorMessageClass);
    errorElement.textContent = input.validationMessage;
};
// Функция, которая удаляет класс с ошибкой
const hideInputError = function(input, config) {
    const inputId = input.id;
    const errorElement = document.querySelector(`.${inputId}-error`);
    input.classList.remove(config.errorClass);
    errorElement.classList.remove(config.errorMessageClass);
    errorElement.textContent = '';
};
  /**
   * Функция, которая проверяет валидность поля
   * @param {*} event событие на инпуте
   * @param {*} config объекты из formValidationConfig
   */
  // Функция, которая проверяет валидность поля
/*
  const isValid = function(event, config){
    const input = event.target;
        
    if(!input.validity.valid){
      showInputError(input, config);
    }else{
      hideInputError(input, config);
    };
};
  
//Функция активации/деактивации кнопок форм
const toggleButtonState = (form, config) => {
    const buttonSubmit = form.querySelector(config.buttonSelector);
    const isFormValid = form.checkValidity();
    // Если есть хотя бы один невалидный инпут
    if (!isFormValid) {
      // сделай кнопку неактивной
      buttonSubmit.classList.add(config.buttonDisabledClass);
      buttonSubmit.disabled = true;
    } else {
      // иначе сделай кнопку активной
      buttonSubmit.classList.remove(config.buttonDisabledClass);
      buttonSubmit.disabled = false;
    };
}; 
//Функция добавления обработчиков к формам
const setEventListeners = (form, config) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    // деактивируем кнопку при 1й загрузке сайта
    form.addEventListener('reset', () => {
    // `setTimeout` нужен для того, чтобы дождаться очищения формы (вызов уйдет в конце стэка) 
    //и только потом вызвать `toggleButtonState`
    setTimeout(() => {
      toggleButtonState(form, config);
      }, 0); // достаточно указать 0 миллисекунд, чтобы после `reset` уже сработало действие
    });
    // Обойдём все элементы полученной коллекции
    inputList.forEach((item) => {
      // каждому полю добавим обработчик события 
      item.addEventListener('input', (event) => {
        // Внутри колбэка вызовем isValid, передав ей форму и проверяемый элемент
        isValid(event, config);
      },0);
    });
}; 
//Функция включения валидации форм
const enableValidation = (config) => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formsList = Array.from(document.querySelectorAll(config.formSelector));   
    // Переберём полученную коллекцию
    formsList.forEach((form) => {
    // Для каждой формы вызовем функцию setEventListeners, передав ей элемент формы
      form.addEventListener('input',disableSubmit);
      form.addEventListener('input', () => {
        toggleButtonState(form, config);
    });
      setEventListeners(form, config);
      toggleButtonState(form, config);
    });
  };
  // Вызовем функцию
  enableValidation(formValidationConfig); */