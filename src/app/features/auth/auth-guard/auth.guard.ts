import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ServicesComponent } from '../../service/services/services.component';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate ,CanActivateChild{

  constructor(private loginService :LoginService , private router:Router, private toastr: ToastrService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginService.isLoggedin()){
        return true
      }
      this.toastr.error('Please First Log In Page!');
      this.router.navigateByUrl("");
      return false;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let role = localStorage.getItem('role')
      let email = localStorage.getItem('email')
      if(role === 'admin' && email === 'admin@gmail.com'){
        return true;
      }else if(email === null){
        this.toastr.error('Please Enter Valid Email!!');
      }else{
        this.toastr.info(`You don't have admin rights`);
      }
      return false;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let loggedInUser= localStorage.getItem('role');
      // let url: string = state.url;
      if (loggedInUser === 'admin') {
              return true;		
      } else {
        this.toastr.info(`You don't have admin rights`);
        return false;
      }
  }
  
  canDeactivate(component: ServicesComponent) {
    if (component.canDeactivate) {
      return window.confirm('Are you sure leave this page?');
    }
    return true;
  }
}
