import { Component, OnInit } from '@angular/core';
import { Empowerbox } from '../../../common';
import { DetailsDataService } from '../../details-data.service';
interface ChooseTagline {
  title: string,
  details: string
}
interface Empowerbox1 {
  empower: string,
  your: string,
  business: string,
  heading: string,
  boxButton: string
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  chooseTagline: ChooseTagline = {
    title: '',
    details: ''
  }
  boxCards: Empowerbox[] = [];
  empowerboxLast: Empowerbox1 = {
    empower: '',
    your: '',
    business: '',
    heading: '',
    boxButton: ''
  }
  constructor(private detailsDataService: DetailsDataService) { }

  ngOnInit(): void {
    this.chooseTagline = this.detailsDataService.chooseTagline;
    this.boxCards = this.detailsDataService.boxCards;
    this.empowerboxLast = this.detailsDataService.empowerboxLast;
  }

}
