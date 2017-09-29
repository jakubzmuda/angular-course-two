import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is simply a test', 'https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg'),
    new Recipe('Another  test recipe', 'this is simply an another test', 'https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
