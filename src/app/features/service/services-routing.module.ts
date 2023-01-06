import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDetailComponent } from './service-detail.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent
  },
  {
    path:':serviceId',
    component:ServiceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
