import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ServerDataSource } from 'ng2-smart-table';

import { Solar } from '../models/solar.model';

@Injectable()
export class SolarService {
   static DATA_SIZE = 500;
   source:any;
   result:any;
   model: any = {};

  constructor(private http: Http) {
  }

  get(solar: Solar) { //alert("test");
  	const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
    const options = new RequestOptions({ headers: headers })

 	  //return this.http.get('http://192.155.246.146:8145/users/solarDashboard_angular', solar,options ).map(res => <any> res);
  return this.http.get('http://192.155.246.146:8145/marketplaces/solarDashboard_angular',options).map(res => <any> JSON.parse(res["_body"]));

  }

  getList(solar: Solar){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

 	  return this.http.get('http://192.155.246.146:8145/users/solarDashboardList_shiv', solar).map(res => JSON.parse(res['_body'])).toPromise();
  }

  getData(): Promise<any> {
    return this.getList(<Solar>this.model).then(data => {
      return data;
    });
  }

}
