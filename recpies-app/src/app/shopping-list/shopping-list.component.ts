import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient ("Pomodori", 10),
    new Ingredient ("Carne Macinata", 20),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded (ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
