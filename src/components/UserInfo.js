export class UserInfo {
    constructor (userName, userJob) {
        this._userName = userName;
        this._userJob = userJob;
    }
    getUserInfo(){
      this._userInfo = {};
      this._userInfo['name'] = this._userName.textContent;
      this._userInfo['job'] = this._userJob.textContent;
      return this._userInfo 
    }
    setUserInfo(name, job){
      this._userName.textContent = name;
      this._userJob.textContent = job;
    }
}