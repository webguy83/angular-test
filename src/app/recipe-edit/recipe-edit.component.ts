import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../recipe-book/recipe-list/models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params.id !== undefined;
      this.initForm();
    });
  }

  get controls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDesc = '';
    let recipeContent = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDesc = recipe.desc;
      recipeContent = recipe.content;
      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }

    recipeIngredients.push(
      new FormGroup({
        name: new FormControl(null),
        amount: new FormControl(null, Validators.pattern(/^[1-9]+[0-9]*$/)),
      })
    );

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDesc, Validators.required),
      content: new FormControl(recipeContent, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  onSubmit() {
    const recipe = this.recipeForm.value;
    const curRecipes = this.recipeService.getRecipes();
    const recipeData = new Recipe(
      curRecipes[curRecipes.length - 1].id + 1,
      recipe.name,
      recipe.description,
      recipe.imagePath,
      recipe.conten,
      recipe.ingredients.pop()
    );
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, recipeData);
    } else {
      this.recipeService.addRecipe(recipeData);
    }
  }
}
