import { Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { take } from 'rxjs/operators';
import { PositiveService } from 'src/app/service/positive.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-positive-details',
  templateUrl: './positive-details.component.html',
  styleUrls: ['./positive-details.component.scss']
})
export class PositiveDetailsComponent{
  id;
  positive: any;
  
  constructor(  route: ActivatedRoute, private db: AngularFireDatabase , private positiveService: PositiveService) { 
    {
      this.id = route.snapshot.paramMap.get('id');
      if(this.id) positiveService.getSingleDetail(this.id).pipe(take(1)).subscribe();
    }
    
  }
  async ngOnInit(){
    this.positive = await this.positiveService.getSingleDetail(this.id).pipe(take(1));
  }
} 