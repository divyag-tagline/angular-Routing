import { Component, Input, OnInit } from '@angular/core';
import { GlobalPresence } from 'src/app/common';

@Component({
  selector: 'app-global-address',
  templateUrl: './global-address.component.html',
  styleUrls: ['./global-address.component.scss']
})
export class GlobalAddressComponent implements OnInit {
  @Input() globalPresence: GlobalPresence = {
    countryName: '',
    address: '',
    mobileNo: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
