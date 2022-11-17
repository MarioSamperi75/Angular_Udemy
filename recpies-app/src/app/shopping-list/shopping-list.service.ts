import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({providedIn:'root'})
export class ShoppingListService {
    changedIngredients = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient ("Pomodori", 10),
        new Ingredient ("Carne Macinata", 20),
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredient (ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.changedIngredients.emit(this.ingredients.slice());
      }

}