import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usernameSource = new BehaviorSubject<string>('');
  currentUsername = this.usernameSource.asObservable();

  private idSource = new BehaviorSubject<string>('');
  currentId = this.idSource.asObservable();
  constructor() { }

  cangeUser(username, id){
    this.usernameSource.next(username);
    this.idSource.next(id);
    localStorage.clear();
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("id", JSON.stringify(id));
  }
}
