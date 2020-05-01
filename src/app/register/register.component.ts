import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register = new Register();
  constructor() { }

  ngOnInit(): void {
    console.log(this.register);
  }

  save(registerForm: NgForm){
    console.log(registerForm.form.value);
  }

}
