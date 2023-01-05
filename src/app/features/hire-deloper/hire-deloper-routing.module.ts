import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevloperComponent } from './devloper/devloper.component';

const routes: Routes = [
  {
    path:'hiredeveloper',
    component:DevloperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HireDeloperRoutingModule { }
