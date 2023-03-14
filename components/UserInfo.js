
export class UserInfo {
    constructor ({userName, userInfo}) {
        this._userName = userName;
        this._userInfo = userInfo;
    }
    getUserInfo(){}
    setUserInfo(){
      nameInput.value = this._userName.textContent;
      jobInput.value = this._userInfo.textContent;
    }
}