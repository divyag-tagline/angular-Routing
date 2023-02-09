import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard/auth.guard';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { ReviewsComponent } from './reviews.component';

const routes: Routes = [
  {
    path: '',
    component: ReviewsComponent,
    canDeactivate: [AuthGuard],
    canActivate: [AuthGuard],
  },
  {
    path: ':reviewId',
    component: ReviewDetailsComponent,
    canDeactivate: [AuthGuard],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewsRoutingModule {}
