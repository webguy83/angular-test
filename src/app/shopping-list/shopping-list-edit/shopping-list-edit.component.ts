import { Component, OnInit, Output, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @Output() newIngredient: Ingredient;
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedIngredient = this.shoppingListService.getIngredient(index);

        this.shoppingListForm.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount,
        });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  add({ form }: NgForm) {
    this.shoppingListService.addIngredient(
      new Ingredient(form.value.name, Number(form.value.amount))
    );
  }

  delete() {}

  clear() {}
}
