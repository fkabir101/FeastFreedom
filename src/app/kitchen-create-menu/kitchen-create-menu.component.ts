// use http://localhost:4200/createMenu/5da8ba57dc716c3c8846336c for testing purposes


import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {CreatedMenuItemsComponent} from '../created-menu-items/created-menu-items.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-kitchen-create-menu',
  templateUrl: './kitchen-create-menu.component.html',
  styleUrls: ['./kitchen-create-menu.component.css']
})
export class KitchenCreateMenuComponent implements OnInit {
  menuForm : FormGroup
  @ViewChild('createList', {static: false}) createList : CreatedMenuItemsComponent;
  constructor(private router : Router) { 
    this.menuForm = new FormGroup({
      name: new FormControl('',Validators.required),
      vegi: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
    })
  }

  onSubmit(){
    // handle submit here
    var menuItem = {
      name : this.menuForm.value.name,
      vegi : this.menuForm.value.vegi,
      price : this.menuForm.value.price,
      kitchen : this.router.url.split('createMenu/')[1]
    }
    console.log(menuItem);
    if(menuItem.name != '' && menuItem.price != '' && menuItem.vegi != '')
      this.createList.pushToItemsArray(menuItem);
  }

  sendData(){
    this.createList.submitToDatabase();
  }
  ngOnInit() {
  }

}
