import { Component, OnInit } from '@angular/core';
import { ServiceCard1, ServiceCard2, ServiceCard3 } from 'src/app/common';
import { DetailsDataService } from '../../details-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  service: string = "";
  serviceCard1 !: ServiceCard1;
  serviceCardDetails !: ServiceCard2[];
  serviceCard6 !: ServiceCard3
  constructor(private detailsDataService: DetailsDataService) { }

  ngOnInit(): void {
    this.service = this.detailsDataService.service;
    this.serviceCard1 = this.detailsDataService.serviceCard1;
    this.serviceCardDetails = this.detailsDataService.serviceCardDetails;
    this.serviceCard6 = this.detailsDataService.serviceCard6;
  }

}
