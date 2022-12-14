import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameRef', {static:false}) nameInput: ElementRef;
  @ViewChild('amountRef', {static:false}) amountInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>() ; 

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit () {
    const name = this.nameInput.nativeElement.value; 
    const amount = this.amountInput.nativeElement.value; 
    const newIngredient = new Ingredient (name, amount); 
    this.ingredientAdded.emit(newIngredient)
  }

}
