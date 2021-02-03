import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  items = [];
  constructor() { }

//Adding data to cart
  addToCart(product){
    this.items.push(product);
  }

//getting data from the cart
  getItems(){
    return this.items;
  }

//clear the cart data
  clearCart(){
    this.items = [];
    return this.items;
  }

}