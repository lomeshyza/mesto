import {profileName, profileAbout, nameInput, jobInput} from '../utils/constants.js';

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
    setUserInfo(){
      this._userName.textContent = nameInput.value;
      this._userJob.textContent = jobInput.value;
    }
}