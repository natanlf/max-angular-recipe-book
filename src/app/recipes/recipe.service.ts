import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

private recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
  [
    new Ingredient('Meat', 1),
    new Ingredient('French Fries', 20)
  ]),
  new Recipe('Big Fat Burguer', 'What else you need to say?', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
  [
    new Ingredient('Buns', 2),
    new Ingredient('Meat', 2)
  ])
];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); //slice => retorna uma cópia do array
  }

  addIngredientsToShopping(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }

}
