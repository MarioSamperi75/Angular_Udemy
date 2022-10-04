import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeSelected= new EventEmitter<void>();

  constructor() { }

  // we doesn't nedd to pass anything, we have already the recipes in the list component (see recipe-list)
  selectRecipe ()  {
    this.recipeSelected.emit();
  
  }

  ngOnInit(): void {
  }

}
