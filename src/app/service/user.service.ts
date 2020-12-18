import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from '@angular/fire/database';
import * as firebase from 'firebase'
import {appUser} from './user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;

  constructor(  private db: AngularFireDatabase ) {}
  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
    });
  }

  get(uid: String): AngularFireObject<appUser> {
    return this.db.object('/users/' + uid);
  }
}


