import { AngularFirestore } from '@angular/fire/firestore';
import { Bday } from '../model/bday.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class BdayService {
    constructor(private fireStore: AngularFirestore) {

    }
    createBuddy(buddy: Bday) {
        return this.fireStore.collection('enroll').add(Object.assign({},buddy));
    }
    getBuddy(){
        return this.fireStore.collection('enroll').snapshotChanges();
    }
}
