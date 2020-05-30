import { Ingredient } from '../models/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('olives', 3),
    new Ingredient('flour', 6),
    new Ingredient('syrup', 15),
  ];
  emitIngredientsChange() {
    this.ingredientsChanged.emit([...this.ingredients]);
  }

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.emitIngredientsChange();
  }

  updateIngredient(index: number, amount: number) {
    this.ingredients[index].amount += amount;
    this.emitIngredientsChange();
  }
}
