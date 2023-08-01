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
     category: formData.value.category,
     status: 'active'
    }

    let subCategoryData = {
     subCategory: 'SubCategory1'
    }

    this.fireStore.collection('categories').add(categoryData).then(docRef => {
      console.log(docRef);
      this.fireStore.doc(`categories/${docRef.id}`).collection('subcategories').add(subCategoryData).then(docRef1 => {
        console.log(docRef1);
        this.fireStore.doc(`categories/${docRef.id}/subcategories/${docRef1.id}`).collection('subsubcategory').add(subCategoryData).then(docRef2 => {
          console.log(docRef2);
          console.log('Second Level SubCategory Saved Successfully');
        })
      })
    })
    .catch((error) => {
       console.log(error)
    })
  }


}
