import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  constructor(private slService : ShoppingListService) { }
  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
    'Test',
    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg',
    [
      new Ingredient('Meat',1),
      new Ingredient('French Fries',20)
    ]),

    new Recipe('A Test Another Recipe',
    'Test Another',
    'https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13.jpg',
    [
      new Ingredient('Rice',3),
      new Ingredient('Chicken',7)
    ]),  
  ];

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsToShoppinglist(ingredient: Ingredient[]){
    this.slService.addIngredient(ingredient); 
  }
}
