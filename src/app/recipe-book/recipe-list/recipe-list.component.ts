import { Component, OnInit } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeService],
})
export class RecipeListComponent implements OnInit {
  recipeDetail: Recipe;
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onNewRecipeClick() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
