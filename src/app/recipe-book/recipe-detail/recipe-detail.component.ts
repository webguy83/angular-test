import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-list/models/recipe.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddToShoppingCartClick() {
    const recipeIngredients = this.recipeDetail.ingredients;
    const shoppingListIngredients = this.shoppingListService.getIngredients();

    recipeIngredients.forEach((recipeIngredient: Ingredient) => {
      const ingredientToUpdateIndex = shoppingListIngredients.findIndex(
        (shopIngredient: Ingredient) =>
          shopIngredient.name === recipeIngredient.name
      );

      if (ingredientToUpdateIndex !== -1) {
        this.shoppingListService.updateIngredient(
          ingredientToUpdateIndex,
          recipeIngredient.amount
        );
      } else {
        this.shoppingListService.addIngredient(recipeIngredient);
      }
    });
  }

  ngOnInit() {}
}
