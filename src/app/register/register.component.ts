import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register = new Register();
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.register);
    this.registerForm = this.fb.group(
      {
        username: ['Harsh'],
        gender: '',
        company: '',
        email: '',
        confirmEmail: '',
        age: ''
      }
    );
  }

  save() {
    console.log(this.registerForm);
  }

  testData() {
    this.registerForm.patchValue({
      username: 'Harsh',
      gender: 'male',
      email: 'harshtiwari343@gmail.com',
      confirmEmail: 'harshtiwari343@gmail.com',
      age: '32'
    })
  }

}
