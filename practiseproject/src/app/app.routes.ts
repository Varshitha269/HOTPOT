import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';  // Add this to ensure common Angular directives are available
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RestaurantPipe } from './restaurant-pipe.pipe';
import { RestaurantComponent } from './restaurant/restaurant.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'restaurant/:foodType', component: RestaurantComponent },
  { path: 'app-header', component: HeaderComponent },
  { path: 'app-about', component: AboutComponent },
  { path: 'app-mainpage', component: MainPageComponent },
  { path: 'app-contactus', component: ContactusComponent },
  { path: 'app-footer', component: FooterComponent },
  { path: 'app-restuarant', component: RestaurantPipe }
];


@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule],
    exports: [RouterModule]
  
})
export class AppRoutingModule { }
