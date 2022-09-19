import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  receivedRecipe : Recipe;

  constructor() { }

  onRecipeReceived (drilledRecipe: Recipe) {
    this.receivedRecipe = drilledRecipe; 
    console.log("In Recipe component:")
    console.log(drilledRecipe);
    console.log(this.receivedRecipe);
  }

  ngOnInit(): void {
  }

}
