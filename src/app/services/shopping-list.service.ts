import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('olives', 3),
    new Ingredient('flour', 6),
    new Ingredient('syrup', 15),
  ];
  emitIngredientsChange() {
    this.ingredientsChanged.next([...this.ingredients]);
  }

  getIngredients() {
    return [...this.ingredients];
  }

  getIngredient(index: number) {
    return this.ingredients[index];
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
