//Валидация
export class FormValidator {
  constructor (config, form){
    this._config = config,
    this._form = form,
    this._buttonElement = this._form.querySelector(this._config.buttonSelector),
    this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector))
  }

// Функция, которая добавляет класс с ошибкой
_showInputError (input) {
  const inputId = input.id;
  const errorElement = this._form.querySelector(`.${inputId}-error`);
  input.classList.add(this._config.errorClass);
  errorElement.classList.add(this._config.errorMessageClass);
  errorElement.textContent = input.validationMessage;
  
};
// Функция, которая удаляет класс с ошибкой
_hideInputError (input) {
  const inputId = input.id;
  const errorElement = this._form.querySelector(`.${inputId}-error`);
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
  const isFormValid = this._form.checkValidity();
  // Если есть хотя бы один невалидный инпут
  if (!isFormValid) {
    // сделай кнопку неактивной
    this._buttonElement.classList.add(this._config.buttonDisabledClass);
    this._buttonElement.disabled = true;
  } else {
    // иначе сделай кнопку активной
    this._buttonElement.classList.remove(this._config.buttonDisabledClass);
    this._buttonElement.disabled = false;
  };
}; 
//Функция добавления обработчиков к формам
_setEventListeners () {
  this._form.addEventListener('reset', () => {
  // `setTimeout` нужен для того, чтобы дождаться очищения формы (вызов уйдет в конце стэка) 
  //и только потом вызвать `toggleButtonState`
  setTimeout(() => {
    this._toggleButtonState();
    }, 0); // достаточно указать 0 миллисекунд, чтобы после `reset` уже сработало действие
  });
  // Обойдём все элементы полученной коллекции
  this._inputList.forEach((item) => {
  // каждому полю добавим обработчик события 
  item.addEventListener('input', (event) => {
    this._toggleButtonState();
    this._isValid(event);
  },0);
});
}; 
//Функция очистки формы
resetValidation() {
  this._toggleButtonState(); 
  this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement) 
  });
} 

//Функция включения валидации форм
enableValidation () {
  this._setEventListeners();
  this._toggleButtonState();
};
}