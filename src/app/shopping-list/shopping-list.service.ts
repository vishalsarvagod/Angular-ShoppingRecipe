import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  constructor() { }
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Banana',10)
  ];
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredients(ingredient: Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredient(ingredient : Ingredient[]){
    // for(let ingredient of this.ingredients){
    //   this.addIngredients(ingredient); 
    // }
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());

  }
}
