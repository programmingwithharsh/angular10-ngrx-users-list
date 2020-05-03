import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
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
        username: ['', [Validators.required, Validators.minLength(3)]],
        gender: '',
        company: '',
        emailGroup: this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          confirmEmail: ['', [Validators.required]],
        }, { validator: this.emailMatcher }),
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
      age: '32'
    })
  }

  emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
    const emailControl = c.get('email');
    const confirmControl = c.get('confirmEmail');

    if (emailControl.pristine || confirmControl.pristine) {
      return null;
    }

    if (emailControl.value === confirmControl.value) {
      return null;
    }

    return { match: true };

  }
}
