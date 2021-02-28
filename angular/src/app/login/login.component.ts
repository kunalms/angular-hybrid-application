import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../core/services/alert.service';

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

  constructor(private alertService: AlertService) {
  }

  ngOnInit(): void {

  }

  submit() {
    this.alertService.show('Login for user ' + this.loginForm.controls['email'].value + ' was successful!')
  }
}
