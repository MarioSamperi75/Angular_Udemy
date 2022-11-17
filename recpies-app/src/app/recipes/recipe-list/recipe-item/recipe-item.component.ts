import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;


  constructor(private recipeService: RecipeService) { }

  // we doesn't nedd to pass anything, we have already the recipes in the list component (see recipe-list)
  selectRecipe ()  {
    this.recipeService.recipeSelected.emit(this.recipe)
  
  }

  ngOnInit(): void {
  }

}
