import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceCardComponent } from './service-card/service-card.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { TechnologySidebarComponent } from './technology-sidebar/technology-sidebar.component';
import { TechnologyBackEndComponent } from './technology-back-end/technology-back-end.component';
import { TechnologyFrontEndComponent } from './technology-front-end/technology-front-end.component';
import { BoxCardsChooseTaglineComponent } from './box-cards-choose-tagline/box-cards-choose-tagline.component';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { AwardIconComponent } from './award-icon/award-icon.component';
import { BlogCardsComponent } from './blog-cards/blog-cards.component';
import { GlobalAddressComponent } from './global-address/global-address.component';
import { FooterInquerySectionComponent } from './footer-inquery-section/footer-inquery-section.component';
import { FooterHelpSectionComponent } from './footer-help-section/footer-help-section.component';
import { FooterServiceSectionComponent } from './footer-service-section/footer-service-section.component';
import { FooterHireDevloperSectionComponent } from './footer-hire-devloper-section/footer-hire-devloper-section.component';


@NgModule({
  declarations: [
    ServiceCardComponent,
    ExperienceCardComponent,
    TechnologySidebarComponent,
    TechnologyBackEndComponent,
    TechnologyFrontEndComponent,
    BoxCardsChooseTaglineComponent,
    RatingStarsComponent,
    AwardIconComponent,
    BlogCardsComponent,
    GlobalAddressComponent,
    FooterInquerySectionComponent,
    FooterHelpSectionComponent,
    FooterServiceSectionComponent,
    FooterHireDevloperSectionComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ServiceCardComponent,
    ExperienceCardComponent,
    TechnologySidebarComponent,
    TechnologyBackEndComponent,
    TechnologyFrontEndComponent,
    BoxCardsChooseTaglineComponent,
    RatingStarsComponent,
    AwardIconComponent,
    BlogCardsComponent,
    GlobalAddressComponent,
    FooterInquerySectionComponent,
    FooterHelpSectionComponent,
    FooterServiceSectionComponent,
    FooterHireDevloperSectionComponent
  ]

})
export class SharedModule { }
