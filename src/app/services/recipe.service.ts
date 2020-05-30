import { Recipe } from '../recipe-book/recipe-list/models/recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Chocolate Cake',
      'Some yummy chocolate',
      'https://www.iheartnaptime.net/wp-content/uploads/2016/06/IHeartNaptime_onepotgoulash-2.jpg',
      // tslint:disable-next-line: max-line-length
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem. Tempor orci dapibus ultrices in iaculis.',
      [
        new Ingredient('coco', 34),
        new Ingredient('dough', 5),
        new Ingredient('syrup', 14),
      ]
    ),
    new Recipe(
      2,
      'Chicken Wings',
      'Hot and spicy bbq wings with tasty side effects',
      'https://graphics8.nytimes.com/images/2016/02/09/dining/09COOKING_CHICKENWINGS2/09COOKING_CHICKENWINGS2-superJumbo.jpg',
      // tslint:disable-next-line: max-line-length
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Elit at imperdiet dui accumsan sit amet nulla.',
      [
        new Ingredient('chicken', 3),
        new Ingredient('hot sauce', 7),
        new Ingredient('honey', 64),
      ]
    ),
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
