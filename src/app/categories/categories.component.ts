import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {

  constructor(private angularFirestore: AngularFirestore){}

  onSubmit(formData){
    let categoryData = {
      category: formData.value.category
    }
    this.angularFirestore.collection('categories').add(categoryData).then(docRef => {
      console.log(docRef);
    })
    .catch(err => {console.log(err)})
  }
}
