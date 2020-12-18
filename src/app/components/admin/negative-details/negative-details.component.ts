import { Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { take } from 'rxjs/operators';
import { NegativeService } from 'src/app/service/negative.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-negative-details',
  templateUrl: './negative-details.component.html',
  styleUrls: ['./negative-details.component.scss']
})
export class NegativeDetailsComponent implements OnInit{
  id;
  negative: any;

  constructor(  route: ActivatedRoute, private db: AngularFireDatabase , private negativeService: NegativeService) { 
    {
      this.id = route.snapshot.paramMap.get('id');
      if(this.id) negativeService.getSingleDetail(this.id).pipe(take(1)).subscribe();
    }
    
  }
  async ngOnInit(){
    this.negative = await this.negativeService.getSingleDetail(this.id).pipe(take(1));
  }
} 