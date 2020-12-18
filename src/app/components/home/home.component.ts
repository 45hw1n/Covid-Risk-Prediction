import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { HomeService } from 'src/app/service/home.service';

import {AngularFireDatabase} from '@angular/fire/database';
import {home} from '../../models/home-details';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  home: home[];
  constructor(private homeService: HomeService ,private router: Router , public authService: AuthService, 
    public ngZone: NgZone,  private route: ActivatedRoute,  private db: AngularFireDatabase) { 
      this.home = [{
        name: 'xxx',
        age: 123,
        mobileNo: 123,
        area: 'xxx',
        address: 'xxx',
        test: 'xxx',
      }]
    }

save(home){
  console.log(home)
  this.homeService.create(home)
  if(home.test == 'positive'){
    this.router.navigateByUrl('positive'); 
  }else{
    this.router.navigateByUrl('negative');
  }
  }
}



