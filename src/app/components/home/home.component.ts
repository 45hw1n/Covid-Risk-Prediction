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
  id;
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
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.homeService.get(this.id).valueChanges().pipe(take(1)).subscribe(this.id);
    }
  
save(home){
  console.log(home)
  console.log(this.id)
  if(this.id){
    this.homeService.update(home, this.id)
  }else{
    this.homeService.create(home)
  }
  
  // if(home.test == 'positive'){
  //   this.router.navigateByUrl('positive'); 
  // }else{
  //   this.router.navigateByUrl('negative');
  // }
  }
}



