import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Task } from '../model/task.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = [
    new User('admin' , '123'),
    new User('user1' , 'qwe'),
  ]

  constructor() { }

  setLogged() {
    localStorage.setItem('isLoggedIn', 'true');

  }

  logOut() {
    localStorage.setItem('isLoggedIn', 'false');
  }

  check(user: User): boolean {
    for (const u of this.users) {
      if (u.name === user.name && u.password === user.password) {
        return true;
      }
    }
    return false;
  }

  private _observableUsers = new Subject<User[]>();

  observableTasks$ = this._observableUsers.asObservable();



  isAuth(): boolean {
    return localStorage.getItem('isLoggedIn') == 'true';
  }

}
