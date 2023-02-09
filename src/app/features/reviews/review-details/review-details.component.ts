import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RatingBox } from 'src/app/common';
import { RouterExitService } from 'src/app/shared/router-exit.service';
import { DetailsDataService } from '../../details-data.service';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss'],
})
export class ReviewDetailsComponent implements OnInit {
  public reviewId!: number;
  canDeactivate!: boolean;
  reviewDetails!: RatingBox | undefined;
  constructor(
    private route: ActivatedRoute,
    private detailsDataService: DetailsDataService,
    private authRouter: RouterExitService
  ) {
    this.route.params.subscribe((res) => {
      this.reviewId = res['reviewId'];
    });
    this.canDeactivate = this.authRouter.canDeactivate(true);
  }

  ngOnInit(): void {
    this.reviewDetails = this.detailsDataService.getReviewId(+this.reviewId);
  }
}
