import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({providedIn:'root'})
export class ShoppingListService {
    changedIngredients = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient ("Pomodori", 10),
        new Ingredient ("Carne Macinata", 20),
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredient (ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.changedIngredients.next(this.ingredients.slice());
      }

      addIngredientsFromRecipe(newIngredients: Ingredient[]){
        this.ingredients.push(...newIngredients)
        this.changedIngredients.next(this.ingredients.slice());

        //for (let ingredient of ingredients) {
        //  this.addIngredient(ingredient);
        //}
      }

}