import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from '@angular/fire/database';
import * as firebase from 'firebase'
import {appUser} from './../service/user'

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(  private db: AngularFireDatabase ) {    
  }

  create(userDetails: firebase.User){
    return this.db.list('/userDetails/').push(userDetails);
  }


  update(userDetails, UserDetailsId) {
    return this.db.object('/userDetails/' + UserDetailsId).update(userDetails);
  }
  
  get(UserDetailsId) {
    return this.db.object('/userDetails/' + UserDetailsId);
  }
}
