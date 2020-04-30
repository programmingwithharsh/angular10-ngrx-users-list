import { Component, OnInit } from '@angular/core';
import { IUser } from '../user';
import { UserService } from '../user.service';
import { Store, select } from '@ngrx/store';
import * as UserActions from '../user.actions';
import * as fromUser from '../user.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  pageTitle = 'Users List';
  errorMessage = '';
  users: IUser[] = [];
  userFilter = "";

  constructor(private userService: UserService, private store: Store) { }

  ngOnInit(): void {

    this.store.dispatch(new UserActions.LoadUsers()); // action dispatch

    this.store.pipe(select(fromUser.getUsers)).subscribe(
      users => {
        this.users = users;
      }
    )

    this.store.pipe(select(fromUser.getError)).subscribe(
      err => {
        this.errorMessage = err;
      }
    )

/*
    this.userService.getUsers().subscribe({
      next: users => {
        this.users = users;
      },
      error: err => this.errorMessage = err
    });
*/

  }
}
