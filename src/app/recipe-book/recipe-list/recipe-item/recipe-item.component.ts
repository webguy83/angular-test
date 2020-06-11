import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  onRecipeClick() {
    this.router.navigate([this.index], {
      relativeTo: this.route,
    });
  }
}
