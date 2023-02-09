import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesComponent } from './services/services.component';
import { ServiceDetailComponent } from './service-detail.component';

@NgModule({
  declarations: [ServicesComponent, ServiceDetailComponent],
  imports: [CommonModule, ServicesRoutingModule, SharedModule],
})
export class ServicesModule {}
