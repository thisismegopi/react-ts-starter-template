import { CacheKey } from '@common/constant';
import { UserData } from '@common/types';
import { LocalStorage } from '@lib/storage';
import { makeAutoObservable } from 'mobx';

export class AppState {
  private _user: UserData | null = null;
  private _ready = false;

  constructor() {
    makeAutoObservable(this);
    this._populateUserData();
  }

  get user() {
    return this._user;
  }

  setUser = (userData: UserData | null) => {
    this._user = userData;
    LocalStorage.save(CacheKey.User, this._user);
  };

  get ready() {
    return this._ready;
  }

  private _setReady(value: boolean) {
    this._ready = value;
  }

  private _populateUserData = () => {
    const userData = LocalStorage.get<UserData>(CacheKey.User);
    this.setUser(userData);
    this._setReady(true);
  };

  get isUserAuthenticated() {
    return !!this._user?.id;
  }

  removeUser = () => {
    this._user = null;
    LocalStorage.delete(CacheKey.User);
  };

  logout = () => {
    // TODO: Reset other state data
    this.removeUser();
  };

  setLoginInfo(params: {
    userId: string;
    accessToken: string;
    refreshToken: string;
  }) {
    const { userId, accessToken, refreshToken } = params;
    // const {  programId } = parseJwt(accessToken);
    this.setUser({
      _authTokenVersion: 0,
      accessToken,
      // email: email.toLowerCase(),
      id: userId,
      // permissionList,
      refreshToken,
    });
  }
}
