import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Restaurant } from './restaurant';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  //replace with web api url in typical use case
  private restaurantUrl = 'api/foods.json'
  constructor(private http: HttpClient) { }
  
  getRestaurants(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(this.restaurantUrl).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
    let errMessage = '';
    if (err.error instanceof ErrorEvent) {
      errMessage = `A client/network error occured: ${err.error.message}`;
    } else {
      errMessage = `Unsuccessful response code: ${err.status}, message: ${err.message}`;
    }
    console.error(errMessage);
    return throwError(() => new Error(errMessage));
  }
}
