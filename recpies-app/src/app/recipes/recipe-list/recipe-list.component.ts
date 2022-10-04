import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Carbonara", "Quello che vuoi ma senza panna", "https://eu-central-1.linodeobjects.com/tasteline/2019/02/spaghetti-carbonara-foto-nurlan-emir-mathem-800x800.jpg"),
    new Recipe("Ragu alla Bolognese", "In realtà è alla Toscana, ma chi se ne accorge...","https://www.insidetherustickitchen.com/wp-content/uploads/2017/11/Italian-Beef-Ragu-740px-Inside-the-Rustic-Kitchen-26.jpg" )
  ];

  @Output() drilledRecipe= new EventEmitter<Recipe>();

  constructor() { }

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
  }

}
