import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {IMenu} from '../menu'

@Injectable({
  providedIn: 'root'
})

export class CartServiceObserve {
  private observableCart: BehaviorSubject<IMenu[]>; 
  private cart: IMenu[];


  constructor() { 
    this.cart = new Array<IMenu>();  
    this.observableCart = <BehaviorSubject<IMenu[]>>new BehaviorSubject([]);
  }

  addItem(cartItem){
    this.cart.push(cartItem)
    this.observableCart.next(Object.assign({}, this.cart));
    console.log(this.cart);
    console.log(this.observableCart);
  }

  get Cart(){
    return this.observableCart.asObservable();
  }
}
