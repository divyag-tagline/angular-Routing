import { Component, OnInit } from '@angular/core';
import { OurBlogs } from 'src/app/common';
import { RouterExitService } from 'src/app/shared/router-exit.service';
import { DetailsDataService } from '../details-data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  ourBlogs!: OurBlogs[];
  canDeactivate!: boolean;

  constructor(
    private detailsDataService: DetailsDataService,
    private authRouter: RouterExitService
  ) {}

  ngOnInit(): void {
    this.ourBlogs = this.detailsDataService.ourBlogs;
    this.canDeactivate = this.authRouter.canDeactivate(true);
  }
}
