import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutDetailsRoutingModule } from './about-details-routing.module';
import { AboutComponent } from './about/about.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutDetailComponent } from './about/about-detail/about-detail.component';


@NgModule({
  declarations: [
    AboutComponent,
    AboutDetailComponent
  ],
  imports: [
    CommonModule,
    AboutDetailsRoutingModule,
    SharedModule
  ]
})
export class AboutDetailsModule { }
