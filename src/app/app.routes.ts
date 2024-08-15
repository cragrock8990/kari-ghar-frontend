import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TraderDetailsFormComponent } from './trader-details-form/trader-details-form.component';

export const routes: Routes = [
   { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'new-trader', component: TraderDetailsFormComponent },

  
  //   { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];
