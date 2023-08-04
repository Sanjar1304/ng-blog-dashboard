import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

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



  loadData(){
    return this.fireStore.collection('categories').snapshotChanges().pipe(
      map(actions => {
        return actions.map(arr => {
          const data = arr.payload.doc.data();
          const id = arr.payload.doc.id;
          return { id, data };
        })
      })
    )
  }



  updateData(id:any, editData:any){
    this.fireStore.collection('categories').doc(id).update(editData).then(docRef => {
      this.toaster.success('Updated Successfully');
    })
  }



}
