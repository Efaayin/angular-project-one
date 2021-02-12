import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'this is simply a test', 'https://thumbor.thedailymeal.com/dXE81KIfC03dEPM40wn00fxi7Gc=/870x565/filters:format(webp)/https://www.thedailymeal.com/sites/default/files/slideshows/2046132/2227952/1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
