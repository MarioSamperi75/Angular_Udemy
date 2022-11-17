import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  @Output() drilledRecipe= new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  onRecipeSelected (sentRecipe: Recipe) {
    console.log ("InListComponent");
    console.log (sentRecipe);
    this.drilledRecipe.emit(sentRecipe);


  }

/*     selectRecipe ()  {
    this.recipeSelected.emit(this.recipe);
    console.log( this.recipe);
  } */

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes(); 
  }

 

}
