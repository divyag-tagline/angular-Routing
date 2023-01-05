import { Component, Input, OnInit } from '@angular/core';
import { FooterHelp } from 'src/app/common';

@Component({
  selector: 'app-footer-help-section',
  templateUrl: './footer-help-section.component.html',
  styleUrls: ['./footer-help-section.component.scss']
})
export class FooterHelpSectionComponent implements OnInit {
  @Input() footerHelp: FooterHelp = {
    title: '',
    class: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
