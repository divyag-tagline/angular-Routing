import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RatingBox } from 'src/app/common';
import { DetailsDataService } from '../../details-data.service';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss'],
})
export class ReviewDetailsComponent implements OnInit {
  public reviewId!: number;
  reviewDetails!: RatingBox | undefined;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private detailsDataService: DetailsDataService
  ) {
    this.route.params.subscribe((res) => {
      this.reviewId = res['reviewId'];
    });
  }

  ngOnInit(): void {
    this.reviewDetails = this.detailsDataService.getReviewId(
      + this.reviewId
    );
  }
}
