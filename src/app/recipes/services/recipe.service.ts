import { Recipe } from "../model/recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "Description",
      "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_960_720.jpg"
    ),
    new Recipe(
      "Another Test Recipe",
      "Description",
      "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_960_720.jpg"
    )
  ];

  getRecipes() {
      return this.recipes;
  }

}
