
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private afs: AngularFirestore) {}




  getLandSections() {
    return this.afs.collection('/land').snapshotChanges();
  }

  getBattery() {
    return this.afs.collection('/battery').snapshotChanges();
  }


  updateLandSection(id:any, status:boolean) {
    let coll = this.afs.collection("/land");
    coll.doc(`${id}`).update({status: status});
  }

  updateBattery(volt:number) {
    let coll = this.afs.collection("/battery");
    coll.doc("battery_1").update({volt: volt});
  }



}
