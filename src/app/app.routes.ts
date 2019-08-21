import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { PricingAndPlansComponent } from './components/pricing-and-plans/pricing-and-plans.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'how-it-works', component: HowItWorksComponent },
    { path: 'pricing-and-plans', component: PricingAndPlansComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**',pathMatch: 'full', redirectTo: 'home' }
];