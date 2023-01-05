import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    loadChildren: () => import('./features/main/main.module').then(main=>main.MainModule)
  },
  {
    path:'devloper',
    loadChildren: () => import('./features/hire-devloper/hire-devloper.module').then(dev=>dev.HireDeloperModule)
  },
  {
    path: '**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
