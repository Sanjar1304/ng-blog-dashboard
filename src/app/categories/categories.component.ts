import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private fireStore: AngularFirestore) { }

  ngOnInit(): void {
  }


  onSubmit(formData: any){

   let categoryData = {
    category: formData.value
   }

   this.fireStore.collection('categories').add(categoryData).then(docRef => {
    console.log(docRef);
   })
   .catch((error) => {
      console.log(error)
   })

  }


}
