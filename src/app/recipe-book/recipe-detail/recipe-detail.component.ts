import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/models/recipe.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

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

  onEditClick() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((val: Params) => {
      const id = +val.params.id;
      this.recipeDetail = this.recipeService.getRecipe(id);
    });
  }
}
