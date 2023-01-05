import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HireDeloperRoutingModule } from './hire-devloper-routing.module';
import { DevloperComponent } from './devloper/devloper.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TechnologyComponent } from './technology/technology.component';


@NgModule({
  declarations: [
    DevloperComponent,
    TechnologyComponent
  ],
  imports: [
    CommonModule,
    HireDeloperRoutingModule,
    SharedModule
  ]
})
export class HireDeloperModule { }
