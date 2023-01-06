import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesModule } from './features/services/services.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/main/main.module').then(main => main.MainModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./features/services/services.module').then(service => service.ServicesModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./features/reviews/reviews.module').then(review => review.ReviewsModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./features/our-blog/our-blog.module').then(blog => blog.OurBlogModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
