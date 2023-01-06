import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyDetailsRoutingModule } from './technology-details-routing.module';
import { TechnologyComponent } from './technology/technology.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TechnologyComponent
  ],
  imports: [
    CommonModule,
    TechnologyDetailsRoutingModule,
    SharedModule
  ]
})
export class TechnologyDetailsModule { }
