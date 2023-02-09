import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empowerbox } from 'src/app/common';
import { DetailsDataService } from 'src/app/features/details-data.service';

@Component({
  selector: 'app-about-detail',
  templateUrl: './about-detail.component.html',
  styleUrls: ['./about-detail.component.scss'],
})
export class AboutDetailComponent implements OnInit {
  boxCard!: Empowerbox | undefined;
  aboutId!: number;
  // constructor(,private route : ActivatedRoute) {
  //     this.route.params.forEach(data=>{
  //     this.boxCard = data
  //     })
  // }
  constructor(
    private detailsDataService: DetailsDataService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((data) => {});
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.aboutId = data['aboutId'];
      this.boxCard = this.detailsDataService.getAboutId(+this.aboutId);
    });
  }
}
