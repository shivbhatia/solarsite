import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../models/user.model';

@Injectable()
export class UserService {
  
  constructor(private http: Http) {
  }

  create(user: User) {
  	let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers, method: "post"});

 	return this.http.post('http://192.155.246.146:8145/users/registration_angular', user).map(res => <any> JSON.parse(res["_body"]));
  }

  checkout(user: User) { 
  	//let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  	//headers.append('Authorization', 'token');

//alert(localStorage.getItem('token'));
const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
const options = new RequestOptions({ headers: headers })
   // let options = new RequestOptions({ headers: headers});


 	return this.http.post('http://192.155.246.146:8145/users/checkout_angular', user,options ).map(res => <any> JSON.parse(res["_body"]));
  }

  get_plans(user: User) {
  	let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers, method: "post"});

 	return this.http.get('http://192.155.246.146:8145/users/get_braintreePlans_angular', user).map(res => <any> JSON.parse(res["_body"]));
  }

 login(user: User) {
  	let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers, method: "post"});

 	return this.http.post('http://192.155.246.146:8145/users/login_angular', user).map(res => <any> JSON.parse(res["_body"]));
  }
  
}