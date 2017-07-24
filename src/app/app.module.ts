import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OwlModule } from 'ng2-owl-carousel';
import { Select2Module } from 'ng2-select2';
import { HttpModule } from '@angular/http';

import {ToasterModule, ToasterService} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng2SmartTableModule,LocalDataSource } from 'ng2-smart-table';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { CustomFormsModule } from 'ng2-validation'

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from "./app.routes";
//import { HOME_DECLARATIONS } from "./home/index";
//import { REGISTER_DECLARATIONS } from "./register/index";
import { REGISTERNEW_DECLARATIONS } from "./registernew/index";
import { REGISTERFORM_DECLARATIONS } from "./registerform/index";
//import { CHECKOUT_DECLARATIONS } from "./checkout/index";
//import { LOGIN_DECLARATIONS } from "./login/index";
//import { DASHBOARD_DECLARATIONS } from "./dashboard/index";
import { UserService } from "./services/user.service";
import { SolarService } from "./services/solar.service";

import { HomeModule } from './home/home.module';
import { registerComponent } from './register/register.component';
import { loginComponent } from './login/login.component';
import { checkoutComponent } from './checkout/checkout.component';
import { UsersModule } from './users/users.module';


import {DataTableModule} from 'primeng/primeng';


import {GooglePlaceModule} from 'ng2-google-place-autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    registerComponent,
    loginComponent,
    checkoutComponent,
    //...HOME_DECLARATIONS,
    //...REGISTER_DECLARATIONS,
    ...REGISTERNEW_DECLARATIONS,
    ...REGISTERFORM_DECLARATIONS,
   // ...LOGIN_DECLARATIONS,
    //...DASHBOARD_DECLARATIONS,
    //...CHECKOUT_DECLARATIONS,
    
    
    //newcheckoutComponent,
    //newdashboardComponent,
  ],
  imports: [
    BrowserModule,
    OwlModule,
    GooglePlaceModule,
    ToasterModule,
    Ng2SmartTableModule,
    NgxPaginationModule,
    Ng2FilterPipeModule,
    

    BrowserAnimationsModule,
    Select2Module,
    CustomFormsModule,
    HttpModule,
    FormsModule,
    HomeModule,
    UsersModule,
    DataTableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,SolarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
