import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'module',
    loadChildren: () => import('./features/main/main.module').then(main=>main.MainModule)
  },
  {
    path:'devloper',
    loadChildren: () => import('./features/hire-deloper/hire-deloper.module').then(dev=>dev.HireDeloperModule)
  },
  {
    path: '**',
    redirectTo:'module/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
