import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'restaurantPipe',
  standalone: true
})

export class RestaurantPipe implements PipeTransform {

  transform(restaurants: any[], foodItem: string): string {
    if (!restaurants || restaurants.length === 0) {
      return `No restaurants found selling ${foodItem}.`;
    }
    const restaurantNames = restaurants.map(restaurant => restaurant.name).join(', ');
    return `The following restaurants sell ${foodItem}: ${restaurantNames}.`;
  }

}
