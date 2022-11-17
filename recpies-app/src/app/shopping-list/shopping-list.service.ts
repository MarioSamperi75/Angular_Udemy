import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({providedIn:'root'})
export class ShoppingListService {

    private ingredients: Ingredient[] = [
        new Ingredient ("Pomodori", 10),
        new Ingredient ("Carne Macinata", 20),
      ];

      getIngredients(){
        return this.ingredients;
      }

      addIngredient (ingredient: Ingredient) {
        this.ingredients.push(ingredient);
      }

}