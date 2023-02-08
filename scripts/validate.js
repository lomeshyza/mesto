//Валидация

// Функция, которая добавляет класс с ошибкой
const showInputError = function(formElement, popupForm, errorMessage) {
    const errorElement = formElement.querySelector(`.${popupForm.id}-error`);
    popupForm.classList.add('popup__form_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__form-error_active');
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
    if(!popupForm.validity.valid){
      showInputError(formElement, popupForm, popupForm.validationMessage);
    }else{
      hideInputError(formElement, popupForm);
    };
  };
  
  //Функция, проверяет наличие невалидного поля
  const hasInvalidInput = (inputList) => {
    // проходим по этому массиву методом some
    return inputList.some((popupForm) => {
      // Если поле не валидно, колбэк вернёт true, обход массива прекратится и вся функция
      return !popupForm.validity.valid;
    });
  };
  //Функция активации/деактивации кнопок форм
  const toggleButtonState = (inputList, buttonElement) => {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      buttonElement.classList.add('popup__button_disabled');
      const isFormValid = isValid(formElement, popupForm);
      buttonElement.disabled = !isFormValid;
    } else {
      // иначе сделай кнопку активной
      buttonElement.classList.remove('popup__button_disabled');
      buttonElement.disabled = false;
    };
  }; 
  //Функция добавления обработчиков к формам
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
      },0);
    });
  }; 
  //Функция вклюения валидации форм
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