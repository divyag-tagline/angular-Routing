import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './features/auth/services/login.service';

interface Headers {
  name: string;
  link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // caseStudy: string = "Case Study";
  isAbout: boolean = false;
  isNotAbout: boolean = false;
  buttonText: string = 'Log out';
  logo: string = '/assets/images/tagline.png';
  headers: Headers[] = [
    {
      name: 'Home',
      link: 'home',
    },
    {
      name: 'Services',
      link: 'services',
    },
    {
      name: 'Technology',
      link: 'technology',
    },
    {
      name: 'Blog',
      link: 'blog',
    },
    {
      name: 'Reviews',
      link: 'review',
    },
    {
      name: 'About Us',
      link: 'about',
    },
  ];
  isLoggedIn: any;

  constructor(private loginService: LoginService, private router: Router) {
    this.isLoggedIn = this.loginService.isLoggedin();
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
