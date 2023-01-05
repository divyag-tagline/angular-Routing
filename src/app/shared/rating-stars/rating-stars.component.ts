import { Component, Input, OnInit } from '@angular/core';
import { RatingBox } from 'src/app/common';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent implements OnInit {
  @Input() ratingStars!: RatingBox;
  constructor() { }

  ngOnInit(): void {
  }

}
