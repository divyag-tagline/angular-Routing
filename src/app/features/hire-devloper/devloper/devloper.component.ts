import { Component, OnInit } from '@angular/core';
import { ServiceCard1, ServiceCard2, ServiceCard3, TechnologyBackEnd } from 'src/app/common';
import { DetailsDataService } from '../../details-data.service';

@Component({
  selector: 'app-devloper',
  templateUrl: './devloper.component.html',
  styleUrls: ['./devloper.component.scss']
})
export class DevloperComponent implements OnInit {
  ourTechnologies : string = "";
  technologySidebar : string[] = [];
  technologyBackEndIcon: TechnologyBackEnd[] = [];
  technologyFrontEndIcon: TechnologyBackEnd[] = [];
  service : string = "";
  serviceCard1: ServiceCard1 = {
    text1: '',
    text2: '',
    text3: ''
  }
  serviceCard2: ServiceCard2[] = [];
  serviceCard6: ServiceCard3 = {
    heading: '',
    span: '',
    buttonText: ''
  }
  constructor(private detailsDataService:DetailsDataService) { }

  ngOnInit(): void {
    this.ourTechnologies = this.detailsDataService.ourTechnologies;
    this.technologySidebar = this.detailsDataService.technologySidebar;
    this.technologyBackEndIcon = this.detailsDataService.technologyBackEndIcon;
    this.technologyFrontEndIcon = this.detailsDataService.technologyFrontEndIcon;
    this.service = this.detailsDataService.service;
    this.serviceCard1 = this.detailsDataService.serviceCard1;
    this.serviceCard2 = this.detailsDataService.serviceCard2;
    this.serviceCard6 = this.detailsDataService.serviceCard6;
  }

}
