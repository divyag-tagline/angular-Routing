import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface Login {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  submitted = false;
  loginDetails: Login[] = [];
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createProfileForm();
  }
  createProfileForm() {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get loginControls() {
    return this.login.controls;
  }

  onSubmit(): void {
    if (this.login.invalid) {
      this.submitted = true;
      return;
    } else {
      let data = {
        id: this.loginDetails.length + 1,
        ...this.login.value,
      };
      this.loginDetails.push(data);
      console.log('this.login.value.email :>> ', this.login.value.email);
      localStorage.setItem('email', this.login.value.email);
      this.submitted = false;
      this.router.navigateByUrl('/home');
    }
    this.login.reset();
  }
}
