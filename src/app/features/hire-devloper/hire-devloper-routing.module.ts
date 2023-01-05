import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../main/home/home.component';
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
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HireDeloperRoutingModule { }
