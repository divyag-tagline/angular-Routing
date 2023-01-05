import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/hire-devloper/about/about.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/main/main.module').then(main=>main.MainModule)
  },
  {
    path:'devloper',
    loadChildren: () => import('./features/hire-devloper/hire-devloper.module').then(dev=>dev.HireDeloperModule)
  },
  {
    path:'review',
    loadChildren: ()=> import('./features/reviews/reviews.module').then(review=>review.ReviewsModule)
  },
  {
    path:'blog',
    loadChildren: ()=> import('./features/our-blog/our-blog.module').then(blog=>blog.OurBlogModule)
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
export class AppRoutingModule {}
