import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class NegativeService {

  constructor( private db: AngularFireDatabase ) { }

  create(negativeDetails){
    return this.db.list('/negativeDetails').push(negativeDetails);
  }
  getAll() {
    return this.db.list('/negativeDetails');
  }
  getSingleDetail(id) {
    return this.db.object('/negativeDetails/' + id).valueChanges();
  }

  update(negativeDetailsId, negativeDetails){
    return this.db.object('/negativeDetails/' + negativeDetailsId).update(negativeDetails);
  }
}
