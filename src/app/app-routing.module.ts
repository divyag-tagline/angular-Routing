import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/main/main.module').then(main => main.MainModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./features/service/services.module').then(service => service.ServicesModule)
  },
  {
    path: 'technology',
    loadChildren: () => import('./features/technology-details/technology-details.module').then(technology => technology.TechnologyDetailsModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./features/our-blog/our-blog.module').then(blog => blog.OurBlogModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./features/reviews/reviews.module').then(review => review.ReviewsModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./features/aboutDetails/about-details.module').then(about => about.AboutDetailsModule)
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
