import { Component, OnInit } from '@angular/core';
import { Empowerbox } from 'src/app/common';
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
  empowerboxLast !: Empowerbox1 
  constructor(private detailsDataService: DetailsDataService) { }

  ngOnInit(): void {
    this.chooseTagline = this.detailsDataService.chooseTagline;
    this.boxCards = this.detailsDataService.boxCards;
    this.empowerboxLast = this.detailsDataService.empowerboxLast;
  }
  getAboutId(id:number){
      console.log("aboutid"),id;
      
  }
}
