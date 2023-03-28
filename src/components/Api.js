export class Api {
    constructor({baseUrl, headers}) {
      this.baseUrl = baseUrl;
      this.headers = headers;
    }
    //приходит ли ответ с сервера
    _handleResponse(res){
        if (res.ok) {  
            return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`); 
    }
    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
          method:'GET',
          headers: this.headers
        })
          .then(this._handleResponse);
      }
    addCard(data) {
        return fetch(`${this.baseUrl}/cards`, {
          method:'POST',
          headers: this.headers,
          'Content-Type': 'application/json',
          body: JSON.stringify({
            name: data.popupPlace,
            link: data.popupPlaceLink 
        }),
        })
          .then(this._handleResponse);
      }
    addAvatar(data) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
          method:'PATCH',
          headers: this.headers,
          body: JSON.stringify({
            avatar: data.popupUpdateProfile
          }),
        })
          .then(this._handleResponse);
      }
    updateUserInfo(data){
        return fetch(`${this.baseUrl}/users/me`, {
            method:'PATCH',
            headers: this.headers,
            body: JSON.stringify({
              name: data.popupProfileName,
              about: data.popupProfileAbout
            }),
          })
            .then(this._handleResponse);
    }
    getUserInfo(){
        return fetch(`${this.baseUrl}/users/me`, {
            method:'GET',
            headers: this.headers
          })
            .then(this._handleResponse);
    }
    deleteCard(cardId){
        return fetch(`${this.baseUrl}/cards/${cardId}`, {
            method:'DELETE',
            headers: this.headers
          })
            .then(this._handleResponse);
    }
    setLike(cardId){
        return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
            method:'PUT',
            headers: this.headers,
          })
            .then(this._handleResponse);
    }
    deleteLike(cardId){
        return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
            method:'DELETE',
            headers: this.headers
          })
            .then(this._handleResponse);
    }
  }