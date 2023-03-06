import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable({providedIn:'root'})
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
      new Recipe(
        "Parmigiana di Melanzane", 
        "Quando pensi di aver fritto troppo, friggi un altro po'", 
        "https://d2sj0xby2hzqoy.cloudfront.net/kenwood_italy/attachments/data/000/008/122/medium/parmigiana-di-melanzane.jpg",
        [new Ingredient("Melanzane", 6 ), new Ingredient("Basilico", 15) ]
        ),
      
      new Recipe(
        "Carbonara", 
        "Ricetta originale senza panna e senza funghi", 
        "https://eu-central-1.linodeobjects.com/tasteline/2019/02/spaghetti-carbonara-foto-nurlan-emir-mathem-800x800.jpg", 
        [new Ingredient("Guanciale", 4 ), new Ingredient("Uovo", 2), new Ingredient("Parmigiano", 8) ]
      ),

      new Recipe(
        "Ragu alla Bolognese", 
        "In realtà è alla Toscana, per le differenze cerca su Google",
        "https://www.insidetherustickitchen.com/wp-content/uploads/2017/11/Italian-Beef-Ragu-740px-Inside-the-Rustic-Kitchen-26.jpg", 
        [new Ingredient("Carne", 10 ), new Ingredient("Pomodori", 12), new Ingredient("Cipolla", 1) ] 
      )
    ];

    getRecipes() {
      return this.recipes.slice();
      //slice to return a new array, a copy, to not have direct access
    }

    getRecipe(id : number) {
      return this.recipes[id];
    }

}