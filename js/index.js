// Page Elements
const input = document.querySelector(".search__field");
const submitBtn = document.querySelector(".search__btn");
import { renderResults } from "./searchView.js";
import {showRecipe} from "./recipeView.js";

const apiKey = "a3ae6345-962b-4276-8ea6-e2cac0f2d83c";
const url = "https://forkify-api.herokuapp.com/api/v2/recipes";

// Add AJAX functions here:
const getRecipes = async () => {
  const inputValue = input.value;
  const urlToFetch = `${url}?search=${inputValue}&key=${apiKey}`;

  try {
    let response = await fetch(urlToFetch);
    if (response.ok) {
      let jsonResponse = await response.json();
      //console.log(jsonResponse.data.recipes);
      renderResults(jsonResponse.data.recipes);
    }
  } catch (error) {
    console.log(error);
  }
};

submitBtn.addEventListener("click", getRecipes);
//submitBtn.onclick = getRecipes;

export const getOneRecipe = async (id) => {
  const urlToFetch = `${url}/${id}?key=${apiKey}`;

  try {
    let response = await fetch(urlToFetch);
    if (response.ok) {
      let jsonResponse = await response.json();
      //console.log(jsonResponse.data.recipe);
      showRecipe(jsonResponse.data.recipe);
    }
  } catch (error) {
    console.log(error);
  }
};
