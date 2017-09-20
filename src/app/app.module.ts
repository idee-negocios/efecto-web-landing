import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Sections
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { WebComponent } from './web/web.component';
import { PricesComponent } from './prices/prices.component';
import { SocialComponent } from './social/social.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { ContactComponent } from './contact/contact.component';
import { SmoothScrollToDirective, SmoothScrollDirective } from 'ng2-smooth-scroll';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    WebComponent,
    PricesComponent,
    SocialComponent,
    AdvertisingComponent,
    ContactComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
