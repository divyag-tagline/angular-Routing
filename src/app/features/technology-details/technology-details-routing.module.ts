import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard/auth.guard';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {
    path: '',
    component: TechnologyComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnologyDetailsRoutingModule {}
