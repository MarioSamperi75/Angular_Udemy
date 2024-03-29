import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameRef', {static:false}) nameInput: ElementRef;
  @ViewChild('amountRef', {static:false}) amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onSubmit () {
    const name = this.nameInput.nativeElement.value; 
    const amount = this.amountInput.nativeElement.value; 
    const newIngredient = new Ingredient (name, amount); 
    this.shoppingListService.addIngredient(newIngredient);
  }

}
