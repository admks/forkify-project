const recipeContainer = document.querySelector('.recipe');
import {addFavourites} from "./likeView.js";

let serving = 4;
let isNew = true;
export const showRecipe = recipe => {

    if (isNew){
        serving = recipe.servings;
    } 

    console.log(isNew)
    console.log(serving)
    console.log(recipe.servings)
    let parameter =  recipe.servings / serving;
    console.log(parameter)
    recipeContainer.innerHTML = "";
    const htmlContent = `   
            <figure class="recipe__fig">
                <img src=${recipe.image_url} alt=${recipe.title} class="recipe__img">
                <h1 class="recipe__title">
                    <span>${recipe.title}</span>
                </h1>
            </figure>
            <div class="recipe__details">
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-stopwatch"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--minutes">${recipe.cooking_time}</span>
                    <span class="recipe__info-text"> minutes</span>
                </div>
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-man"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
                    <span class="recipe__info-text"> servings</span>

                    <div class="recipe__info-buttons">
                        <button class="btn-tiny">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-minus"></use>
                            </svg>
                        </button>
                        <button class="btn-tiny">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-plus"></use>
                            </svg>
                        </button>
                    </div>

                </div>
                <button class="recipe__love">
                    <svg class="header__likes">
                        <use href="img/icons.svg#icon-heart-outlined"></use>
                    </svg>
                </button>
            </div>

            <div class="recipe__ingredients">
                <ul class="recipe__ingredient-list">

                ${recipe.ingredients.map(item => {
                    return `<li class="recipe__item">
                        <svg class="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="recipe__count">${item.quantity ? (item.quantity*parameter).toFixed(1) :""}</div>
                        <div class="recipe__ingredient">
                            <span class="recipe__unit">${item.unit}</span>
                            ${item.description}
                        </div>
                    </li>`
                }).join("")
                }


                    
                </ul>

                <button class="btn-small recipe__btn">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-shopping-cart"></use>
                    </svg>
                    <span>Add to shopping list</span>
                </button>
            </div>

            <div class="recipe__directions">
                <h2 class="heading-2">How to cook it</h2>
                <p class="recipe__directions-text">
                    This recipe was carefully designed and tested by
                    <span class="recipe__by">${recipe.publisher}</span>. Please check out directions at their website.
                </p>
                <a class="btn-small recipe__btn" href=${recipe.source_url} target="_blank">
                    <span>Directions</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>

                </a>
            </div>
    
    `
recipeContainer.innerHTML = htmlContent;

const btn_tiny = document.querySelectorAll(".btn-tiny");
btn_tiny[0].addEventListener("click", ()=>minusServing(recipe));
btn_tiny[1].addEventListener("click", ()=>plusServing(recipe));
const btn_love = document.querySelector(".recipe__love");
btn_love.addEventListener("click", (e)=>addFavourites(e,recipe));

};


function minusServing(recipe) {
    isNew = false;
    recipe.servings -=1;
    showRecipe(recipe)
}
function plusServing(recipe) {
    isNew = false;
    recipe.servings +=1;
    showRecipe(recipe)
}
