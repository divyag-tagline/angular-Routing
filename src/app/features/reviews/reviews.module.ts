import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsComponent } from './reviews.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReviewDetailsComponent } from './review-details/review-details.component';


@NgModule({
  declarations: [
    ReviewsComponent,
    ReviewDetailsComponent
  ],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    SharedModule
  ]
})
export class ReviewsModule { }
