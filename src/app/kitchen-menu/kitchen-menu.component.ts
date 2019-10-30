import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {MenuService} from '../services/menu.service'
import {CartServiceObserve} from '../services/cart'

@Component({
  selector: 'app-kitchen-menu',
  templateUrl: './kitchen-menu.component.html',
  styleUrls: ['./kitchen-menu.component.css']
})
export class KitchenMenuComponent implements OnInit {
  public kitchenId
  public itemArray : {}
  constructor(private router : Router, private menuService: MenuService, private cartService : CartServiceObserve) { 
  }

  addToCart(item){
    this.cartService.addItem(item)
  }
  ngOnInit() {
    this.kitchenId = this.router.url.split('kitchen/')[1]
    
    this.menuService.getMenuById(this.kitchenId).subscribe(
      (data) => this.itemArray = data,
      (err) => console.log(err),
      () => this.itemArray = this.itemArray[Object.keys(this.itemArray)[0]]
    )
  }

}
