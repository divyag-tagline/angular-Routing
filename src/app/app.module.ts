import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AboutComponent } from './features/hire-devloper/about/about.component';
import { BoxCardsChooseTaglineComponent } from './shared/box-cards-choose-tagline/box-cards-choose-tagline.component';
import { SharedModule } from './shared/shared.module';
import { OurBlogsComponent } from './features/our-blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    OurBlogsComponent,
  ],
  imports: [
    AppRoutingModule, 
    BrowserModule, 
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('AppModule running..');
    
  }
}
