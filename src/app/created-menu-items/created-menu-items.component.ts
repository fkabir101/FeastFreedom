import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-created-menu-items',
  templateUrl: './created-menu-items.component.html',
  styleUrls: ['./created-menu-items.component.css']
})
export class CreatedMenuItemsComponent implements OnInit {
  itemArray = []
  constructor(private menuService: MenuService, private router : Router) { }

  ngOnInit() {
  }

  pushToItemsArray(item){
    this.itemArray.push(item);
  }

  deleteFromArray(index){
    this.itemArray.splice(index, 1);
    console.log(this.itemArray);
  }
  submitToDatabase(){
    this.menuService.createMenu(this.itemArray).subscribe(
      (data) => console.log(data),
      (err) => console.log(err),
      () => {this.router.navigate([`/`])}
      )
  }
}
