import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators } from '@angular/forms';
import {UserService} from '../services/user.service';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-user-page',
  templateUrl: './login-user-page.component.html',
  styleUrls: ['./login-user-page.component.css']
})
export class LoginUserPageComponent implements OnInit {
  loginForm : FormGroup;
  user;
  public errorMsg;
  public test : string;
  constructor(private router: Router, private userService: UserService, private dataService : DataService) { 
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });    
  }
  onSubmit(formData) {
    // Handle Form Submission here DO LATER WITH SERVICE
    console.log(this.loginForm.value);
    this.user = {
      username : this.loginForm.value.username,
      password : this.loginForm.value.password
    }

    this.userService.loginUser(this.user)
    .subscribe(
      (data) => {
        this.dataService.cangeUser(data.username, data._id.replace(/['"]+/g, ""))
        //this.dataService.changeId(data._id)
        //this.dataService.currentId.subscribe(idData =>{console.log(idData)});
      },
      (error) => this.errorMsg = error,
      () => this.router.navigate(['/'])
    );
  }

  ngOnInit() {
  }

}
