import { Component } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { PositiveService } from 'src/app/service/positive.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-positive-list',
  templateUrl: './positive-list.component.html',
  styleUrls: ['./positive-list.component.scss']
})
export class PositiveListComponent {
  subscription: Subscription;
  positiveDetails: any;

  constructor( private db: AngularFireDatabase , private positiveService: PositiveService) {
    this.positiveService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map((c: any, index: number) => {
          console.log('c is', c);
          return (
            {
              id: index + 1,
              name: c.payload.val().name,
              age: c.payload.val().age, //add your objects here
              area: c.payload.val().area,
              key: c.payload.key,
            }
          );
        }
        )
      )
    ).subscribe(datas => {
      this.positiveDetails = datas;
    });

   
      
  
  }
}