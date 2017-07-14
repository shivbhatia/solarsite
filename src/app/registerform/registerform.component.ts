import { Component,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import {ToasterModule, ToasterService} from 'angular2-toaster';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';



@Component({
  selector: 'registerform',
  templateUrl: "./registerform.html",
  styleUrls:['../../assets/cssregisterform/bootstrap.min.css','../../assets/cssregisterform/font-awesome.css','../../assets/cssregisterform/style.css'],
  //encapsulation: ViewEncapsulation.None,
  
})
export class RegisterformComponent{
  model: any = {};
	result : any;
  token : any;
	message:string;
  private toasterService: ToasterService;
  isLoading: boolean = false;
  
  constructor(private router: Router,private userService: UserService, toasterService: ToasterService) { 
    this.toasterService = toasterService;

  }


  ngOnInit(){
  }

   register() {
        console.log("register");
         $('#mydiv').show();
          this.userService.create(<User>this.model).subscribe(result => {
          //console.log(result);
          this.result = result;
            //alert(typeof result);

            if (result.success == true) {
              //alert("User added");
              //alert(result.type); 
              this.message="Success";
              $('#mydiv').hide();
              if(result.type=='company'){ 
                  this.toasterService.pop('success', 'Please make payment', '');
                  localStorage.setItem('token', result.token);
                  this.router.navigate(['/users/checkout']);
                }else{
                  this.toasterService.pop('success', 'Successfully Registered', '');
                  this.router.navigate(['/users/login']);
              }
            } else {
              alert("Not added");
            }
          });
          
    }
  


}
	

