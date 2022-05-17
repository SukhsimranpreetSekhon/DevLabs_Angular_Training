export class Restaurant {
    restaurantId: number;
    name: string;
    ratingOfTen: number;
    phoneNumber: string;
    address: string
  
    constructor(restaurantId: number, name: string, ratingOfTen: number, phoneNumber: string, address: string) {
      this.restaurantId = restaurantId;
      this.name = name;
      this.ratingOfTen = ratingOfTen;
      this.phoneNumber = phoneNumber;
      this.address = address;
    }
}
