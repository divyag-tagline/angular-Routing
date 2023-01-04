import { Component, Input, OnInit } from '@angular/core';
import { TechnologyBackEnd } from 'src/app/common';

@Component({
  selector: 'app-technology-front-end',
  templateUrl: './technology-front-end.component.html',
  styleUrls: ['./technology-front-end.component.scss']
})
export class TechnologyFrontEndComponent implements OnInit {
  @Input() technologyFrontEndIcon: TechnologyBackEnd = {
    img: '',
    language: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
