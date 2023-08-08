import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoryList!: any[];
  formCategory!: string
  formStatus: string = 'Add';
  categoryId!: any;

  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
  }


  getCategories(){
    this.categoryService.loadData().subscribe((response: any) => {
      console.log(response)
      this.categoryList = response;
    })
  }


  onSubmit(formData: any){
    let categoryData: Category = {
      category: formData.value.category
    }

    if(this.formStatus === 'Add'){
      this.categoryService.saveData(categoryData);
      formData.reset()
    }

    if(this.formStatus === 'Edit'){
      this.categoryService.updateData(this.categoryId, categoryData);
      formData.reset();
      this.formStatus = 'Add'
    }

  }



  onEdit(category: any, id: any){
    this.formCategory = category;
    this.formStatus = 'Edit';
    this.categoryId = id;
  }


}
