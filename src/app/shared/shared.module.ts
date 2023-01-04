import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceCardComponent } from './service-card/service-card.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { TechnologySidebarComponent } from './technology-sidebar/technology-sidebar.component';
import { TechnologyBackEndComponent } from './technology-back-end/technology-back-end.component';
import { TechnologyFrontEndComponent } from './technology-front-end/technology-front-end.component';


@NgModule({
  declarations: [
    ServiceCardComponent,
    ExperienceCardComponent,
    TechnologySidebarComponent,
    TechnologyBackEndComponent,
    TechnologyFrontEndComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ServiceCardComponent,
    ExperienceCardComponent,
    TechnologySidebarComponent,
    TechnologyBackEndComponent,
    TechnologyFrontEndComponent
  ]

})
export class SharedModule { }
