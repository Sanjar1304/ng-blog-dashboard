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
    this.categoryService.saveData(categoryData);
    formData.reset()
  }



  onEdit(category: any){
    this.formCategory = category;
  }


}
