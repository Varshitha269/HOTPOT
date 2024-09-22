import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
    foodType!: string;
    restaurants = [
      { name: "PS4 Veg Restaurant", category: "South Indian, North Indian, Chinese, Chaat, Juices", imageUrl: "https://b.zmtcdn.com/data/pictures/5/19808125/4b5d850f73723f6000212f787461b707.jpg" },
      { name: "Orion Tiffin Center", category: "South Indian, North Indian, Chinese, Beverages", imageUrl: "https://b.zmtcdn.com/data/pictures/5/19683925/88f784032e65125f3294712256778028.jpg" },
      { name: "Sri Annapurna Mess And Catring Services", category: "South Indian, North Indian, Chinese", imageUrl: "https://b.zmtcdn.com/data/pictures/5/19683925/88f784032e65125f3294712256778028.jpg" },
      { name: "Hotel Sks", category: "South Indian, North Indian, Chinese, Beverages, Sweets", imageUrl: "https://b.zmtcdn.com/data/pictures/5/19683925/88f784032e65125f3294712256778028.jpg" },
      { name: "Tabun Manaruchulu", category: "South Indian, Indian", imageUrl: "https://b.zmtcdn.com/data/pictures/5/19683925/88f784032e65125f3294712256778028.jpg" },
      { name: "RK Meat Foods", category: "South Indian, North Indian, Biryani", imageUrl: "https://b.zmtcdn.com/data/pictures/5/19683925/88f784032e65125f3294712256778028.jpg" },
      { name: "A2B - Adyar Ananda Bhavan", category: "South Indian, Sweets, Chinese", imageUrl: "https://b.zmtcdn.com/data/pictures/5/19683925/88f784032e65125f3294712256778028.jpg" },
      { name: "Hotel Orion", category: "South Indian, Chinese, Thalis, North Indian", imageUrl: "https://b.zmtcdn.com/data/pictures/5/19683925/88f784032e65125f3294712256778028.jpg" },
      { name: "Subbayya Gari Hotel", category: "South Indian", imageUrl: "https://b.zmtcdn.com/data/pictures/5/19683925/88f784032e65125f3294712256778028.jpg" },
      { name: "Sakhi Tiffin's", category: "South Indian", imageUrl: "https://b.zmtcdn.com/data/pictures/5/19683925/88f784032e65125f3294712256778028.jpg" },
      { name: "Kwality Walls Ice Cream and More", category: "Ice Cream, Desserts, Beverages", imageUrl: "https://b.zmtcdn.com/data/pictures/5/19683925/88f784032e65125f3294712256778028.jpg" },
      { name: "ITEMS. AT ₹69. Taaza Kitchen.", category: "Indian", imageUrl: "https://b.zmtcdn.com/data/pictures/5/19683925/88f784032e65125f3294712256778028.jpg" },
      { name: "ITEMS. AT ₹69. Hotel Sks.", category: "Indian", imageUrl: "https://b.zmtcdn.com/data/pictures/5/19683925/88f784032e65125f3294712256778028.jpg" }
    
    ];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.foodType = params['foodType'];
        });
    }

    isFoodTypeMatch(restaurant: { foodType: string; }) {
        return restaurant.foodType === this.foodType || this.foodType === 'all';
    }
}
