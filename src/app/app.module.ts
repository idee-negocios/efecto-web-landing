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
import { FooterComponent } from './footer/footer.component';

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
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
