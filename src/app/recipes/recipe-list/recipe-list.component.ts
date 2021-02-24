import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe 1','test recipe', 'https://www.thebakingfairy.net/wp-content/uploads/2020/04/chocolate_cake03.jpg'),
    new Recipe('A test Recipe 2','test recipe', 'https://www.thebakingfairy.net/wp-content/uploads/2020/04/chocolate_cake03.jpg'),
    new Recipe('A test Recipe 3','test recipe', 'https://www.thebakingfairy.net/wp-content/uploads/2020/04/chocolate_cake03.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
