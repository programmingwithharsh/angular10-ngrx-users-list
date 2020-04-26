import { Component, OnInit } from '@angular/core';
import { IUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  pageTitle = 'Users List';
  errorMessage = '';
  users: IUser[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: users => {
        this.users = users;
      },
      error: err => this.errorMessage = err
    });
  }
}
