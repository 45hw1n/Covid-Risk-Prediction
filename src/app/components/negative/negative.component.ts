import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { NegativeService } from 'src/app/service/negative.service';

@Component({
  selector: 'app-negative',
  templateUrl: './negative.component.html',
  styleUrls: ['./negative.component.scss']
})
export class NegativeComponent{
  x: number;
  negativeDetails:{ 
    name: string ,
    age: number,
    mobileNo: number,
    area: string,
    address: string,
    riskValue: number,
    risk:string,
    }
    ={
      name:"",
      age: null,
      mobileNo:null,
      area: "",
      address:"",
      riskValue:null,
      risk:""
}
negativeValue:{
  cold:boolean,
  cough: boolean,
  fever: boolean,
  breathlessness: boolean,
  lossOfSenses: boolean,
  soreThroat: boolean,
  none:boolean,
  diabeties: boolean,
  lungDisorder: boolean,
  heartDisorder: boolean,
  kidneyDisorder: boolean,
  hypertension: boolean,
  noDisorder: boolean
}={
  
  cold:false,
  cough: false,
  fever: false,
  breathlessness: false,
  lossOfSenses: false,
  soreThroat: false,
  none:false,
  diabeties: false,
  lungDisorder: false,
  heartDisorder: false,
  kidneyDisorder: false,
  hypertension: false,
  noDisorder: false
}

public get value(): number {
  const numbermap = { 
    cold:1,
    cough:1 ,
    fever:2 ,
    breathlessness: 5,
    lossOfSenses:4 ,
    soreThroat:2 ,
    none:0,
    diabeties: 0.25,
    lungDisorder: 0.5,
    heartDisorder: 0.25,
    kidneyDisorder:0.25 ,
    hypertension:0.25 ,
    noDisorder: 0
  };
  return Object.entries(this.negativeValue)
    // get only the entries with true value
    .filter(([_key, value]) => value)
    // map the keys having true to an array of numbers
    .map(([key]) => numbermap[key])
    // requred for preventing error from reduce if none selected `[].reduce()`
    .concat(0)
    // sum the numbers with reduce
    .reduce((prev = 0, curr) => prev + curr) 
}
 

constructor(private negativeService: NegativeService ,
            private router: Router,  
            public authService: AuthService,
            public ngZone: NgZone) { }

public set value(value: number){
  this.negativeDetails.riskValue = this.value;
  if (this.negativeDetails.riskValue == 0) {
    this.negativeDetails.risk = "No Risk"
  } else if (this.negativeDetails.riskValue >0 && this.negativeDetails.riskValue <=3 ){
    this.negativeDetails.risk = "Low Risk"
  }else if (this.negativeDetails.riskValue >3.1 && this.negativeDetails.riskValue <=6 ){
    this.negativeDetails.risk = "Medium Risk"
  }else{
    this.negativeDetails.risk = "High Risk"
  }
}
submit(){
    this.value = this.negativeDetails.riskValue
    console.log(this.negativeDetails)
    this.negativeService.create(this.negativeDetails)
    this.router.navigate(['/stay-safe']);
  }
}