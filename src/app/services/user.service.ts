import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {IUser, IUserCred} from '../user'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user: IUser):Observable<IUser>{
    return this.http.post<IUser>('http://localhost:3000/api/user/register', user)
    .pipe(catchError(this.errorHandler));
  }

  loginUser(user){
    return this.http.post<IUserCred>('http://localhost:3000/api/user/login', user)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
