import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { ReviewsComponent } from './reviews.component';

const routes: Routes = [
  {
    path:'',
    component:ReviewsComponent
  },
  {
    path:':reviewId',
    component:ReviewDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
