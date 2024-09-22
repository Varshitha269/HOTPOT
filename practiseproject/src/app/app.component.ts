import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { RestaurantPipe } from './restaurant-pipe.pipe';
// import { RestaurantComponent } from './restaurant/restaurant.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AdminComponent,CommonModule,RestaurantPipe,FormsModule,RouterOutlet, HeaderComponent,MainPageComponent, AboutComponent,ContactusComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class AppComponent {
  title ='HOTPOT Food Delivery App';
 
}
