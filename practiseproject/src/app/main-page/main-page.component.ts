import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private router: Router) {}

  navigateToRestaurants(category: string) {
    this.router.navigate(['/restaurant'], { queryParams: { category } });
  }
  // Method to navigate to the restaurant component with the selected food item
  // onFoodItemSelect(foodItem: string): void {
  //   this.router.navigate(['/restaurants', { foodItem }]);
  // }
}
