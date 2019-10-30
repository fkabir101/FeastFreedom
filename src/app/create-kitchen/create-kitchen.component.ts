import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators } from '@angular/forms';
import {KitchenService} from '../services/kitchen.service';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
import {requiredFileType} from '../required-field-type'

@Component({
  selector: 'app-create-kitchen',
  templateUrl: './create-kitchen.component.html',
  styleUrls: ['./create-kitchen.component.css']
})
export class CreateKitchenComponent implements OnInit {
  kitchenForm : FormGroup;
  kitchen;
  public errorMsg;
  daysArray = [];
  id;
  response;

  constructor(private router: Router, private kitchenService: KitchenService,  private dataService : DataService) { 
    this.kitchenForm = new FormGroup({
      name: new FormControl('', Validators.required),
      startHour: new FormControl('', Validators.required),
      endHour: new FormControl('', Validators.required),
      image: new FormControl(null, [Validators.required, requiredFileType('png')]),
      sunday: new FormControl(''),
      monday: new FormControl(''),
      tuesday: new FormControl(''),
      wednsday: new FormControl(''),
      thursday: new FormControl(''),
      friday: new FormControl(''),
      saturday: new FormControl(''),
    });
  }

  onSubmit(formData){
    
    // handle form submission here
    this.createDaysArray(
      this.kitchenForm.value.sunday, 
      this.kitchenForm.value.monday, 
      this.kitchenForm.value.tuesday, 
      this.kitchenForm.value.wednsday, 
      this.kitchenForm.value.thursday, 
      this.kitchenForm.value.friday, 
      this.kitchenForm.value.saturday)
    
    //console.log(this.kitchenForm.value);
    this.kitchen = {
      name : this.kitchenForm.value.name,
      workingDays: this.daysArray,
      startHour: this.convertTime(this.kitchenForm.value.startHour),
      endHour: this.convertTime(this.kitchenForm.value.endHour),
      kitchenImage: this.kitchenForm.value.image,
      creator: this.id
    }
    this.kitchenService.createKitchen(this.kitchen).subscribe(
      (data) => {
        console.log(data)
        this.response = data._id
      },
      (err) => this.errorMsg = err,
      () => {
        console.log(this.response)
        this.router.navigate([`/createMenu/${this.response}`])
      }
    );
  }
  ngOnInit() {
    this.dataService.currentId.subscribe(id => this.id = id.replace(/['"]+/g, ""));
  }

  convertTime(time: string){
    var convertedTime =  parseInt(time.split(' ')[0]);
    var isAm = time.split(' ')[1];
    
    if(isAm === 'am'){
      return convertedTime;
    }
    else{
      return (convertedTime + 12)
    }
    
  }
  createDaysArray(sun, mon, tue, wed, thur, fri, sat){
    if(sun === true){
      this.daysArray.push(true);
    }
    else{
      this.daysArray.push(false);
    }

    if(mon === true){
      this.daysArray.push(true);
    }
    else{
      this.daysArray.push(false);
    }

    if(tue === true){
      this.daysArray.push(true);
    }
    else{
      this.daysArray.push(false);
    }

    if(wed === true){
      this.daysArray.push(true);
    }
    else{
      this.daysArray.push(false);
    }

    if(thur === true){
      this.daysArray.push(true);
    }
    else{
      this.daysArray.push(false);
    }

    if(fri === true){
      this.daysArray.push(true);
    }
    else{
      this.daysArray.push(false);
    }

    if(sat === true){
      this.daysArray.push(true);
    }
    else{
      this.daysArray.push(false);
    }
    console.log(this.daysArray);
  }
}
