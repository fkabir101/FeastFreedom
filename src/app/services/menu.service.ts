import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {IMenu, IResponse} from '../menu';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }
  ///api/menu/create
  createMenu(menu):Observable<IMenu[]>{
    return this.http.post<IMenu[]>('http://localhost:3000/api/menu/create', menu)
    .pipe(catchError(this.errorHandler));
  }

  getMenuById(id):Observable<IResponse[]>{
    return this.http.get<IResponse[]>(`http://localhost:3000/api/menu/${id}`)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
