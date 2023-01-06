import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TechnologyComponent } from './technology/technology.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    TechnologyComponent,
    ServicesComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule { }
