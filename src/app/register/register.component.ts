import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register = new Register();
  registerForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    console.log(this.register);
    this.registerForm = new FormGroup(
      {
        username: new FormControl(),
        gender: new FormControl(),
        company: new FormControl(),
        email: new FormControl(),
        age: new FormControl()
      }
    );
  }

  save() {
    console.log(this.registerForm);
  }

}
