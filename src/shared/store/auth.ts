import { IUserData } from "../types/IUserData";
import { makeAutoObservable} from "mobx";


class AuthStore {
  user?: IUserData;
  isLoading: boolean = false;
  users: any = [];

  constructor() {
    makeAutoObservable(this);
  }

  
}

export const authStore = new AuthStore();
