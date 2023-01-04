import { Component, Input, OnInit } from '@angular/core';
import { ExperienceDetailsRight } from 'src/app/common';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  @Input() expProfessional: ExperienceDetailsRight = {
    img: '',
    heading: '',
    heading1: ''
  };
  constructor() { }

  ngOnInit(): void {
    console.log(this.expProfessional);
    
  }

}
