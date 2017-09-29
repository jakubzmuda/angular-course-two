import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty schnitzel',
      'good stuff',
      'http://www.dvo.com/link/0630_155947172.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French fries', 20)
      ]),
    new Recipe(
      'Big fat burger',
      'oh whatever, really',
      'http://aht.seriouseats.com/images/20100331-fatburger-large.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]),
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

}
