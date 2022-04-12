import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice(); //copia do array
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    //Como usamos cópia de array é necessário usar o emit
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); //permite colocar um array de elementos em uma lista de elementos
    this.ingredientsChanged.emit(this.ingredients.slice()); //emite que os ingredientes mudaram com uma cópia deles
  }

}
