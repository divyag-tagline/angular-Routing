import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-award-icon',
  templateUrl: './award-icon.component.html',
  styleUrls: ['./award-icon.component.scss']
})
export class AwardIconComponent implements OnInit {
  @Input() awardsRecognitionsImg: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
