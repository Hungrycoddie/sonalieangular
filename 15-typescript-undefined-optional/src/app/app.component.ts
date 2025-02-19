import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    // const user = this.users.find((user) => user.id === this.selectedUserId);

    return this.users.find((user) => user.id === this.selectedUserId);
    // console.log(users);
    // return user;
  }


  constructor() {
    const userNames = this.users.map(user => user.name);
  console.log(userNames);
  }


  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
