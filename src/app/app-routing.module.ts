import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './features/home/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/registration/registration.module').then(
        (register) => register.RegistrationModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/home/home.module').then((login) => login.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/main/main.module').then((main) => main.MainModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./features/service/services.module').then(
        (service) => service.ServicesModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'technology',
    loadChildren: () =>
      import('./features/technology-details/technology-details.module').then(
        (technology) => technology.TechnologyDetailsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./features/our-blog/our-blog.module').then(
        (blog) => blog.OurBlogModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'review',
    loadChildren: () =>
      import('./features/reviews/reviews.module').then(
        (review) => review.ReviewsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/aboutDetails/about-details.module').then(
        (about) => about.AboutDetailsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
