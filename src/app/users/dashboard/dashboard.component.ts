import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var google: any;

@Component({
  selector: 'dashboard',
  templateUrl: "./dashboard.html",
})

export class dashboardComponent implements OnInit{
	map:any;
    markers :any;
	
	constructor(private router: Router) { }
	
	ngOnInit(){
		/**** START CODE FOR GOOGLE MAP *****/
		var myLatLng = {lat: 42.8997702, lng: -78.7890054};
		var map = new google.maps.Map(document.getElementById('map'), {
          		zoom: 4,
          		center: myLatLng
        	});
		var marker = new google.maps.Marker({
         		position: myLatLng,
          		map: map,
          		title: 'Hello World!'
        	});
		/**** END CODE FOR GOOGLE MAP *****/
	}


}