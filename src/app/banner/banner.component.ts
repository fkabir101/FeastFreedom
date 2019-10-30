import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  username: string
  constructor(private dataService : DataService) { }

  ngOnInit() {

      this.dataService.currentUsername.subscribe(username => this.username = username)
  }

}
