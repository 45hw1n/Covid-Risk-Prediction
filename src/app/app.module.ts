import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './route/app-routing.module';
import { CustomFormsModule } from 'ng2-validation'

import { AppComponent } from './app.component';

//Auth Components
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

//Nav
import { NavbarComponent } from './components/navbar/navbar.component';

//Main Components
import { HomeComponent } from './components/home/home.component';
import { PositiveComponent } from './components/positive/positive.component';
import { NegativeComponent } from './components/negative/negative.component';
//List
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { PositiveListComponent } from './components/admin/positive-list/positive-list.component';
import { NegativeListComponent } from './components/admin/negative-list/negative-list.component';

//Details
import { UserDetailsComponent } from './components/admin/user-details/user-details.component';
import { PositiveDetailsComponent } from './components/admin/positive-details/positive-details.component';
import { NegativeDetailsComponent } from './components/admin/negative-details/negative-details.component';

//Service
import { AuthService } from "./service/auth.service";
import { HomeService } from './service/home.service';
import { UserService } from './service/user.service';
import { PositiveService } from './service/positive.service';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';


import { StaySafeComponent } from './components/stay-safe/stay-safe.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { AdminAuthGuardService } from './service/admin-auth-guard.service';

//datatable
//import {DataTableModule} from 'angular-4-data-table';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    VerifyEmailComponent,
    PositiveComponent,
    NegativeComponent,
    UserListComponent,
    PositiveListComponent,
    NegativeListComponent,
    UserDetailsComponent,
    PositiveDetailsComponent,
    NegativeDetailsComponent,
    NavbarComponent,
    
    StaySafeComponent,
    
    ThankYouComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    //DataTableModule
  ],
  providers: [AuthService,
    UserService,
    HomeService,
    PositiveService,
    AdminAuthGuardService

],
  bootstrap: [AppComponent]
})
export class AppModule { }
