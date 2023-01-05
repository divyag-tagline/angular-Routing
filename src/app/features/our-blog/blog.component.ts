import { Component, OnInit } from '@angular/core';
import { OurBlogs } from 'src/app/common';
import { DetailsDataService } from '../details-data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  ourBlogs!: OurBlogs[];
  constructor(private detailsDataService: DetailsDataService) { }

  ngOnInit(): void {
    this.ourBlogs = this.detailsDataService.ourBlogs;
  }

}
