import { Component, OnInit } from '@angular/core';
import { KitchenService } from '../services/kitchen.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public kitchens = []
  public errorMsg;
  constructor(private kitchenService: KitchenService, private router : Router) { }

  ngOnInit() {
    this.kitchenService.getKitchens().subscribe(
      (data) => this.kitchens = data,
      (error) =>this.errorMsg = error,
      () => console.log(this.kitchens)
    )
  }
  seeMenu(kitchen){
    this.router.navigate([`kitchen/${kitchen._id}`])
  }
}
