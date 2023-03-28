export class UserInfo {
    constructor (userName, userJob, userAvatar) {
        this._userName = userName;
        this._userJob = userJob;
        this._userAvatar = userAvatar
    }
    getUserInfo(){
      this._userInfo = {};
      this._userInfo['name'] = this._userName.textContent;
      this._userInfo['job'] = this._userJob.textContent;
      
      return this._userInfo 
      
    }
    setUserInfo(data){
      this._userName.textContent = data.name;
      this._userJob.textContent = data.about;
      this._userAvatar.src = data.avatar;
    }
}