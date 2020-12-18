import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { NegativeService } from 'src/app/service/negative.service';

@Component({
  selector: 'app-negative-list',
  templateUrl: './negative-list.component.html',
  styleUrls: ['./negative-list.component.scss']
})
export class NegativeListComponent {
  subscription: Subscription;
  negativeDetails: any;
  
constructor(private db: AngularFireDatabase , private negativeService: NegativeService) { 
  this.negativeService.getAll().snapshotChanges().pipe(
    map(changes =>
      changes.map((n: any, index: number) => {
        console.log('c is', n);
        return (
          {
            id: index + 1,
            name: n.payload.val().name,
            age: n.payload.val().age, //add your objects here
            area: n.payload.val().area,
            key: n.payload.key,
          }
        );
      }
      )
    )
  ).subscribe(negativeDatas => {
    this.negativeDetails = negativeDatas;
  });
}
  

}
