import { Component, OnInit } from '@angular/core';
import { TechnologyBackEnd } from 'src/app/common';
import { RouterExitService } from 'src/app/shared/router-exit.service';
import { DetailsDataService } from '../../details-data.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent implements OnInit {
  ourTechnologies: string = '';
  technologySidebar: string[] = [];
  technologyBackEndIcon: TechnologyBackEnd[] = [];
  technologyFrontEndIcon: TechnologyBackEnd[] = [];
  canDeactivate!: boolean;

  constructor(
    private detailsDataService: DetailsDataService,
    private authRouter: RouterExitService
  ) {}

  ngOnInit(): void {
    this.ourTechnologies = this.detailsDataService.ourTechnologies;
    this.technologySidebar = this.detailsDataService.technologySidebar;
    this.technologyBackEndIcon = this.detailsDataService.technologyBackEndIcon;
    this.technologyFrontEndIcon =
      this.detailsDataService.technologyFrontEndIcon;
    this.canDeactivate = this.authRouter.canDeactivate(true);
  }
}
