import { Injectable } from '@angular/core';
import { of } from 'rxjs';

interface Users {
  userName: string;
  email: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private users: Users[] = [
    {
      userName: 'admin',
      email: 'admin@gmail.com',
      password: '12345678',
      role: 'admin',
    },
    {
      userName: 'user',
      email: 'user@gmail.com',
      password: '12345678',
      role: 'user',
    }
  ];
  constructor() {}

  isLoggedin() {
    return !!localStorage.getItem('email');
  }

  login(users:{password:string,email:string}):any {
    return of(this.users.find((res:any) => res.email === users.email && res.password === users.password))
  }
}
