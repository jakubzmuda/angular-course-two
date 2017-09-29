import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is simply a test', 'https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg'),
    new Recipe('Another  test recipe', 'this is simply an another test', 'https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg')
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
