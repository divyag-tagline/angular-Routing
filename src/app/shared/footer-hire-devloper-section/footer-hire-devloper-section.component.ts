import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-hire-devloper-section',
  templateUrl: './footer-hire-devloper-section.component.html',
  styleUrls: ['./footer-hire-devloper-section.component.scss']
})
export class FooterHireDevloperSectionComponent implements OnInit {
  @Input() footerHireDevlopers: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
