import { Component, Input, OnInit } from '@angular/core';
import { OurBlogs } from 'src/app/common';

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html',
  styleUrls: ['./blog-cards.component.scss']
})
export class BlogCardsComponent implements OnInit {
  @Input() ourBlogs: OurBlogs = {
    img: '',
    blogButton: '',
    blogDate: '',
    heading: '',
    heading1: '',
    readMore: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
