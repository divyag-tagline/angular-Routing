import { Component, OnInit } from '@angular/core';
import { ServiceCard1, ServiceCard2, ServiceCard3 } from 'src/app/common';
import { RouterExitService } from 'src/app/shared/router-exit.service';
import { DetailsDataService } from '../../details-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  service: string = '';
  serviceCard1!: ServiceCard1;
  serviceCardDetails!: ServiceCard2[];
  serviceCard6!: ServiceCard3;
  canDeactivate!: boolean;
  serviceId!: number;

  constructor(
    private detailsDataService: DetailsDataService,
    private authRouter: RouterExitService
  ) {}

  ngOnInit(): void {
    this.service = this.detailsDataService.service;
    this.serviceCard1 = this.detailsDataService.serviceCard1;
    this.serviceCardDetails = this.detailsDataService.serviceCardDetails;
    this.serviceCard6 = this.detailsDataService.serviceCard6;
    this.canDeactivate = this.authRouter.canDeactivate(true);
  }
}
