import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceCardComponent } from './service-card/service-card.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { TechnologySidebarComponent } from './technology-sidebar/technology-sidebar.component';


@NgModule({
  declarations: [
    ServiceCardComponent,
    ExperienceCardComponent,
    TechnologySidebarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ServiceCardComponent,
    ExperienceCardComponent,
    TechnologySidebarComponent
  ]

})
export class SharedModule { }
