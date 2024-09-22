import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';  
import { RestaurantPipe } from '../restaurant-pipe.pipe';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, CommonModule, RestaurantPipe], 
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  foodItem: string = ''; 
  restaurants = [
    { name: 'Pulse', foodItems: ['Pizza', 'Burger','Biryani','cool drinks'] },
    { name: 'Pizza Hut', foodItems: ['Pizza', 'Pasta'] },
    { name: 'Chillies', foodItems: ['Pizza', 'Burger'] },
    { name: 'Table 9', foodItems: ['Mutton', 'Biryani','cool drinks'] },
    { name: 'Rayalaseema Ruchulu', foodItems: ['Biryani', 'Chicken'] },
    { name: 'Ps4', foodItems: ['Idly', 'Dosa','cool drinks'] }
  ];

  getFilteredRestaurants() {
    if (!this.foodItem) {
      return [];
    }
    return this.restaurants.filter(restaurant =>
      restaurant.foodItems.includes(this.foodItem)
    );
  }

  getFilteredRestaurantNames(): string {
    const filteredRestaurants = this.getFilteredRestaurants();
    return filteredRestaurants.map(res => res.name).join(', ');
  }
}
