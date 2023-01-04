import { Component, Input, OnInit } from '@angular/core';
import { ServiceCard2 } from 'src/app/common';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {
  @Input() services:ServiceCard2 = {
    img: '',
    heading: '',
    description: '',
    learMore: ''
  };
  constructor() { }

  ngOnInit(): void {
    console.log("services",this.services);
    
  }

}
