import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({providedIn:'root'})
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
      new Recipe("Carbonara", "Quello che vuoi ma senza panna", "https://eu-central-1.linodeobjects.com/tasteline/2019/02/spaghetti-carbonara-foto-nurlan-emir-mathem-800x800.jpg"),
        new Recipe("Carbonara", "Quello che vuoi ma senza panna", "https://eu-central-1.linodeobjects.com/tasteline/2019/02/spaghetti-carbonara-foto-nurlan-emir-mathem-800x800.jpg"),
        new Recipe("Ragu alla Bolognese", "In realtà è alla Toscana, ma chi se ne accorge...","https://www.insidetherustickitchen.com/wp-content/uploads/2017/11/Italian-Beef-Ragu-740px-Inside-the-Rustic-Kitchen-26.jpg" )
      ];

      getRecipes() {
        return this.recipes.slice();
        //slice to return a new array, a copy, to not have direct access
      }

}