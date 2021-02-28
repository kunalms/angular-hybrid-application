import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });
  dateOfBirth: Date = new Date();

  constructor() {
  }

  ngOnInit(): void {

  }

  submit() {
    console.log(this.dateOfBirth);
    console.log(this.loginForm.controls['email'].value);
    console.log(this.loginForm.controls['password'].value);
  }
}
