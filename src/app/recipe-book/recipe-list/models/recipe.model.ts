import { Ingredient } from 'src/app/models/ingredient.model';

export class Recipe {
  constructor(
    public name: string,
    public desc: string,
    public imagePath: string,
    public content: string,
    public ingredients: Ingredient[]
  ) {}
}
