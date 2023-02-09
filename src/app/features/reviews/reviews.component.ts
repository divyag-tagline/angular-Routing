import { Component, OnInit } from '@angular/core';
import { OurClientele, RatingBox } from 'src/app/common';
import { DetailsDataService } from '../details-data.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  canDeactivate(): boolean {
    return true;
  }
  ourClientele!: OurClientele;
  ratingStars: RatingBox[] = [];
  constructor(private detailsDataService: DetailsDataService) {}

  ngOnInit(): void {
    this.ourClientele = this.detailsDataService.ourClientele;
    this.ratingStars = this.detailsDataService.ratingStars;
  }
}
