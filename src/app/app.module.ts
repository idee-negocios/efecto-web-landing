import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { SimpleNotificationsModule } from 'angular2-notifications';

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
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    SimpleNotificationsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
