import { Recipe } from '../recipe-book/recipe-list/models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  constructor(private router: Router, private route: ActivatedRoute) {}
  private recipes: Recipe[] = [
    new Recipe(
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

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next([...this.recipes]);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next([...this.recipes]);
    this.router.navigate(['../recipes'], { relativeTo: this.route });
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next([...this.recipes]);
  }
}
