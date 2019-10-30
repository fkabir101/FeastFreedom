import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {IKitchen, IKitchenCreate} from '../kitchens'
import { catchError } from 'rxjs/operators';
import {toFormData} from './toFormData';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  constructor(private http: HttpClient) { }

  getKitchens():Observable<IKitchen[]>{
    return this.http.get<IKitchen[]>('http://localhost:3000/api/kitchen/')
    .pipe(catchError(this.errorHandler));
    //return this.http.get('http://localhost:3000/api/kitchen/')
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

  createKitchen(kitchenData){
    return this.http.post<IKitchenCreate>('http://localhost:3000/api/kitchen/create', toFormData(kitchenData))
    .pipe(catchError(this.errorHandler));
  }
  
}
