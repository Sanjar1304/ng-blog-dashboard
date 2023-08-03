import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private fireStore: AngularFirestore,
              private toaster: ToastrService) { }

  saveData(value:any){
    this.fireStore.collection('categories').add(value).then(docRef => {
      this.toaster.success('Added Successfully')
      console.log(docRef)
    })
    .catch((error) => {
      this.toaster.error('Category did not add.')
      console.log(error)
    })
  }



}
