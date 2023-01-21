import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  users: User[] = []

  constructor() { }

  getUsers () {
    return this.users
  }

  addUser (user:User) {
    this.users.push(user)
  }

  deleteUser (i:number) {
    this.users.splice(i, 1)
  }

  updateUser (user: User, i:number) {
    this.users.splice(i, 1, user)
  }

}
