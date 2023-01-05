import { Component, OnInit } from '@angular/core';
import { TechnologyBackEnd } from 'src/app/common';
import { DetailsDataService } from '../../details-data.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  ourTechnologies : string = "";
  technologySidebar : string[] = [];
  technologyBackEndIcon: TechnologyBackEnd[] = [];
  technologyFrontEndIcon: TechnologyBackEnd[] = [];
  constructor(private detailsDataService:DetailsDataService) { }

  ngOnInit(): void {
    this.ourTechnologies = this.detailsDataService.ourTechnologies;
    this.technologySidebar = this.detailsDataService.technologySidebar;
    this.technologyBackEndIcon = this.detailsDataService.technologyBackEndIcon;
    this.technologyFrontEndIcon = this.detailsDataService.technologyFrontEndIcon;
  }
}
