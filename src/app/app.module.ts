import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Sections
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { WebComponent } from './web/web.component';
import { PricesComponent } from './prices/prices.component';
import { SocialComponent } from './social/social.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { ContactComponent } from './contact/contact.component';

import { SmoothScrollToDirective, SmoothScrollDirective } from 'ng2-smooth-scroll';
import { AlertComponent } from './_directives/index';
import { AlertService } from './_services/index';

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
    AlertComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
