import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard/auth.guard';
import { ServiceDetailComponent } from './service-detail.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ':serviceId',
        component: ServiceDetailComponent,
        canActivate: [AuthGuard],
        canDeactivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
