import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { PricingAndPlansComponent } from './components/pricing-and-plans/pricing-and-plans.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Import routes
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HowItWorksComponent,
    PricingAndPlansComponent,
    ContactUsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
