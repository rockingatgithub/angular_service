import { Component } from '@angular/core';
import { UserListService } from '../user-list.service';
import { User } from '../user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

  usersList : User[] = []
  
  constructor(private userService: UserListService) {
    this.usersList = userService.getUsers()
  }

  addUsersToList (user: any) {
    this.userService.addUser(user.value)
  }

  deleteUserFromList(phone: string) {
    const index = this.usersList.findIndex(user => user.phone === phone)
    this.userService.deleteUser(index)
  }


  

}
