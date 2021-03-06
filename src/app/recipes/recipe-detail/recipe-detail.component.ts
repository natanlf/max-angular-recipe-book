import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getRoute();
  }

  getRoute() {
    this.route.params.subscribe(
      (params: Params) => this.getRecipe(params['id'])
    );
  }

  getRecipe(id) {
    this.recipe = this.recipeService.getRecipe(id);
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShopping(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

}
