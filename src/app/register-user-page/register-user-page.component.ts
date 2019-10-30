import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {IUser} from '../user'
@Component({
  selector: 'app-register-user-page',
  templateUrl: './register-user-page.component.html',
  styleUrls: ['./register-user-page.component.css']
})
export class RegisterUserPageComponent implements OnInit {
  registerForm : FormGroup;
  user;
  
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { 
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });    
  }
  
  onSubmit(formData) {
    // Handle Form Submission here DO LATER WITH SERVICE
    if(this.registerForm.valid){
      this.user = {
        username: this.registerForm.value.username,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      }
      console.log(this.registerForm.value);
        this.userService.registerUser(this.user).subscribe(
          () => this.router.navigate(['/loginUser']));
    } 
  }

  ngOnInit() {
  }

}
