import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology-sidebar',
  templateUrl: './technology-sidebar.component.html',
  styleUrls: ['./technology-sidebar.component.scss']
})
export class TechnologySidebarComponent implements OnInit {
  @Input() technologySidebar: string = "";
  isActive: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
