import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private fireStore: AngularFirestore) { }

  saveData(value:any){
    this.fireStore.collection('categories').add(value).then(docRef => {
      console.log(docRef)
    })
    .catch((error) => {
       console.log(error)
    })
  }



}
