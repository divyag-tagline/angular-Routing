import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HireDeloperRoutingModule } from './hire-deloper-routing.module';
import { DevloperComponent } from './devloper/devloper.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DevloperComponent
  ],
  imports: [
    CommonModule,
    HireDeloperRoutingModule,
    SharedModule
  ]
})
export class HireDeloperModule { }
