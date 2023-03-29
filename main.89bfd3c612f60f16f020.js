(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n){var r=n.data,o=n.userId,i=n.handleCardClick,u=n.handleRemoveCard,a=n.handleLike,c=n.handleDeleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=r,this._link=r.link,this._name=r.name,this._like=r.likes,this._userId=o,this._cardId=r._id,this._ownerId=r.owner._id,this._templateSelector=t,this._handleCardClick=i,this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._cardLocation=this._element.querySelector(".card__location"),this._cardBasket=this._element.querySelector(".card__basket"),this._cardLikeBtn=this._element.querySelector(".card__like-button"),this._likesCounter=this._element.querySelector(".card__like-counter"),this._handleRemoveCard=u,this._handleLike=a,this._handleDeleteLike=c}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardLocation.textContent=this._name,this._likesCounter.textContent=this._like.length,this._handleBasket(),this._isLiked(),this._element}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"_handleBasket",value:function(){this._ownerId!==this._userId&&this._cardBasket.remove()}},{key:"toggleLike",value:function(e){this._likesCounter.textContent=e.likes.length,this._cardLikeBtn.classList.toggle("card__like-button_active")}},{key:"_isLiked",value:function(){var e=this;this._data.likes.forEach((function(t){t._id===e._userId&&e._cardLikeBtn.classList.add("card__like-button_active")}))}},{key:"_setEventListeners",value:function(){var e=this;this._cardLikeBtn.addEventListener("click",(function(){e._cardLikeBtn.classList.contains("card__like-button_active")?e._handleDeleteLike(e._cardId):e._handleLike(e._cardId)})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)})),this._cardBasket.addEventListener("click",(function(){return e._handleRemoveCard(e._cardId)}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._form=n,this._buttonElement=this._form.querySelector(this._config.buttonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._config.inputSelector))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=e.id,n=this._form.querySelector(".".concat(t,"-error"));e.classList.add(this._config.errorClass),n.classList.add(this._config.errorMessageClass),n.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=e.id,n=this._form.querySelector(".".concat(t,"-error"));e.classList.remove(this._config.errorClass),n.classList.remove(this._config.errorMessageClass),n.textContent=""}},{key:"_isValid",value:function(e){var t=e.target;t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_toggleButtonState",value:function(){this._form.checkValidity()?(this._buttonElement.classList.remove(this._config.buttonDisabledClass),this._buttonElement.disabled=!1):(this._buttonElement.classList.add(this._config.buttonDisabledClass),this._buttonElement.disabled=!0)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(t){e._toggleButtonState(),e._isValid(t)}),0)}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._setEventListeners(),this._toggleButtonState()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u={formSelector:".popup__forms",inputSelector:".popup__form",buttonSelector:".popup__button",buttonDisabledClass:"popup__button_disabled",errorClass:"popup__form_type_error",errorMessageClass:"popup__message-error_active"};function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var l=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"setItem",value:function(e){this._container.prepend(e)}},{key:"addItems",value:function(e){this._container.append(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"rendererItems",value:function(e){var t=this;this.clear(),e.forEach((function(e){t._renderer(e)}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,p(r.key),r)}}function p(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===s(t)?t:String(t)}var y=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.key&&i.closePopup()},(r=p(r="_closeByEscape"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._closeByEscape)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closeByEscape)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&e.closePopup()}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._picture=t._popup.querySelector(".popup__picture"),t._location=t._popup.querySelector(".popup__location"),t}return t=u,(n=[{key:"openPopup",value:function(e,t){this._picture.src=t,this._picture.alt=e,this._location.textContent=e,b(v(u.prototype),"openPopup",this).call(this)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=n._popup.querySelector(".popup__forms"),n._inputs=n._popup.querySelectorAll(".popup__form"),n._handleFormSubmit=r,n._submitButton=n._popup.querySelector(".popup__button"),n._buttonMessage=n._submitButton.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputs.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;k(P(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"closePopup",value:function(){k(P(u.prototype),"closePopup",this).call(this),this._form.reset()}},{key:"loading",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._buttonMessage}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}var L=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=t,this._userJob=n,this._userAvatar=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfo={},this._userInfo.name=this._userName.textContent,this._userInfo.job=this._userJob.textContent,this._userInfo}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userJob.textContent=e.about,this._userAvatar.src=e.avatar}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}var R=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=n,this.headers=r}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{method:"GET",headers:this.headers}).then(this._handleResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,"Content-Type":"application/json",body:JSON.stringify({name:e.popupPlace,link:e.popupPlaceLink})}).then(this._handleResponse)}},{key:"addAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.popupUpdateProfile})}).then(this._handleResponse)}},{key:"updateUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.popupProfileName,about:e.popupProfileAbout})}).then(this._handleResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:this.headers}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._handleResponse)}},{key:"setLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this.headers}).then(this._handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this.headers}).then(this._handleResponse)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popup.querySelector(".popup__forms"),t._confirmButton=document.querySelector(".popup__button_type_confirm"),t}return t=u,(n=[{key:"callback",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;B(x(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var V,M=document.querySelector(".profile__edit-button"),N=document.querySelector(".profile__add-button"),F=document.querySelector(".popup__form_type_name"),J=document.querySelector(".popup__form_type_about"),H=document.querySelector(".profile__name"),G=document.querySelector(".profile__about"),z=document.querySelector(".profile__image"),$=document.querySelector(".popup__add"),K=document.querySelector(".popup__edit"),Q=document.querySelector(".popup__update"),W=new R({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-62",headers:{authorization:"f25ed207-d78c-464d-b0ee-85c791005c08","Content-Type":"application/json"}});Promise.all([W.getUserInfo(),W.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];V=o._id,ne.setUserInfo(o),X.rendererItems(i)})).catch((function(e){console.log(e)}));var X=new l({renderer:function(e){var t=Y(e);X.addItems(t)}},".cards__container");function Y(e){var t=new n("#cards-template",{data:e,userId:V,handleCardClick:function(e,t){te.openPopup(e,t)},handleRemoveCard:function(e){ee.openPopup(),ee.callback((function(){W.deleteCard(e).then((function(){ee.closePopup(),t.removeCard()})).catch((function(e){console.log(e)}))}))},handleLike:function(e){W.setLike(e).then((function(e){t.toggleLike(e)})).catch((function(e){console.log(e)}))},handleDeleteLike:function(e){W.deleteLike(e).then((function(e){t.toggleLike(e)})).catch((function(e){console.log(e)}))}});return t.generateCard()}var Z=new j(".popup_type_add",{handleFormSubmit:function(e){Z.loading(!0),W.addCard(e).then((function(e){X.setItem(Y(e)),Z.closePopup()})).catch((function(e){return console.log(e)})).finally((function(){Z.loading(!1)}))}}),ee=new D(".popup_type_confirm"),te=new _(".popup_type_image");N.addEventListener("click",(function(){Z.openPopup(),ue.resetValidation()})),Z.setEventListeners(),ee.setEventListeners(),te.setEventListeners();var ne=new L(H,G,z),re=new j(".popup_type_edit",{handleFormSubmit:function(e){re.loading(!0),W.updateUserInfo(e).then((function(e){ne.setUserInfo(e),re.closePopup()})).catch((function(e){return console.log(e)})).finally((function(){re.loading(!1)}))}}),oe=new j(".popup_type_update",{handleFormSubmit:function(e){oe.loading(!0),W.addAvatar(e).then((function(e){ne.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){oe.loading(!1)})),oe.closePopup()}});M.addEventListener("click",(function(){var e=ne.getUserInfo();F.value=e.name,J.value=e.job,re.openPopup(),ie.resetValidation()})),z.addEventListener("click",(function(){oe.openPopup(),ae.resetValidation()})),re.setEventListeners(),oe.setEventListeners();var ie=new i(u,K),ue=new i(u,$),ae=new i(u,Q);ie.enableValidation(),ue.enableValidation(),ae.enableValidation()})();