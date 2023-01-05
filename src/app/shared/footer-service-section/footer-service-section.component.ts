import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-service-section',
  templateUrl: './footer-service-section.component.html',
  styleUrls: ['./footer-service-section.component.scss']
})
export class FooterServiceSectionComponent implements OnInit {
  @Input() footerServices : string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
