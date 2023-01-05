import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../main/home/home.component';
import { AboutComponent } from './about/about.component';
import { DevloperComponent } from './devloper/devloper.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {
    path:'',
    component:TechnologyComponent
  },
  {
    path:'hiredeveloper',
    component:DevloperComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HireDeloperRoutingModule { }
