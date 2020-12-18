import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import {PositiveService} from './../../service/positive.service'
import {positiveDetails} from '../../models/positive-details'
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-positive',
  templateUrl: './positive.component.html',
  styleUrls: ['./positive.component.scss']
})
export class PositiveComponent {
  positiveDetails: positiveDetails[] ;

constructor(private positiveService:PositiveService,  private router: Router ,  public authService: AuthService, public ngZone: NgZone) {
  this.positiveDetails = [{
    name: "ashwin" ,
    age: 9999999999,
    mobileNo: 9999999999,
    area: "KK Nagar",
    address: "Lig colony",
    hospitalName: "Appolo",
    hospitalLocation: "KK nagar",
    healthCondition: "recovering",
    daysAdmitted: 9999999999,
    contact1:"string",
    area1:"string",
    mobileNo1:9999999999,
    contact2:"string",
    area2:"string",
    mobileNo2:9999999999, 
    contact3:"string",
    area3:"string",
    mobileNo3:9999999999,
    outstation:"string",
    frontlineWorker:"string",
    contactWithCovid19:"string"
  }]
}

save(positiveDetails){
    this.positiveService.create(positiveDetails)
    console.log(positiveDetails)
    this.router.navigate(['/thank-you']);
  }
}
  