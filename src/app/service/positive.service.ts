import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PositiveService {

  constructor( private db: AngularFireDatabase ) { }

  create(positiveDetails){
    return this.db.list('/positiveDetails').push(positiveDetails);
  }

  getAll() {
    return this.db.list('/positiveDetails');
  }

  get(positiveDetailsId) {
    return this.db.object('/positiveDetails/' + positiveDetailsId);
  }
  getSingleDetail(id) {
    return this.db.object('/positiveDetails/' + id).valueChanges();
  }
}
