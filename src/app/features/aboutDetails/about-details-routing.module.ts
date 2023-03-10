import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDetailComponent } from './about/about-detail/about-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      {
        path: ':aboutId',
        component: AboutDetailComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutDetailsRoutingModule { }
