import { Component, Input, OnInit } from '@angular/core';
import { TechnologyBackEnd } from 'src/app/common';

@Component({
  selector: 'app-technology-back-end',
  templateUrl: './technology-back-end.component.html',
  styleUrls: ['./technology-back-end.component.scss']
})
export class TechnologyBackEndComponent implements OnInit {
  @Input() technologyBackEndIcon: TechnologyBackEnd = {
    img: '',
    language: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
