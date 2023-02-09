import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';

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
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService
  ) {}

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
      this.loginService.login(this.login.value).subscribe((res: any) => {
        if (res) {
          localStorage.setItem('email', res.email);
          localStorage.setItem('role', res.role);
          this.submitted = false;
          this.router.navigateByUrl('/home');
        } else {
          this.toastr.error('Please Enter Valid Email!!');
        }
      });
    }
    this.login.reset();
  }
}
