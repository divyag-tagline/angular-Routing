import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceCard2 } from 'src/app/common';
import { RouterExitService } from 'src/app/shared/router-exit.service';
import { DetailsDataService } from '../details-data.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
})
export class ServiceDetailComponent implements OnInit {
  serviceDetails!: ServiceCard2 | undefined;
  serviceId!: number;
  canDeactive!: boolean;
  constructor(
    private route: ActivatedRoute,
    private detailsDataService: DetailsDataService,
    private authRouter: RouterExitService
  ) {
    this.route.params.subscribe((res) => (this.serviceId = res['serviceId']));
  }

  ngOnInit(): void {
    this.serviceDetails = this.detailsDataService.getServicesId(
      +this.serviceId
    );
    this.canDeactive = this.authRouter.canDeactivate(true);
  }
}
