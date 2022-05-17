import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  restaurants: Restaurant[] = [];
  errorMessage: String = '';

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe({
      next: restaurants => {
        console.log(typeof this.restaurants);
        console.log(typeof restaurants);
        this.restaurants = restaurants;
        console.log(this.restaurants[0].name);
        
        //perform any modifications to the retrieved data here
      },
      error: err => this.errorMessage = err

    })
  }

  listify(){

  }


}
