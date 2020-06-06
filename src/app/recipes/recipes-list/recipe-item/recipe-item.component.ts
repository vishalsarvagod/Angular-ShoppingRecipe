import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
  onSelected()
  {
    this.recipeSelected.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
