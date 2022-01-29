const recipesContainer = document.querySelector('.results__list');
import {getOneRecipe} from "./index.js";



export const renderResults = recipesArr => {
    //console.log(recipesArr)

    recipesContainer.innerHTML = "";
    recipesArr.forEach(element => {    
        const htmlContent = `
        <li id=${element.id}>
        <a class="results__link results__link--active" href="#23456">
        <figure class="results__fig">
        <img src=${element.image_url} alt="Test">
        </figure>
        <div class="results__data">
        <h4 class="results__name">${element.title}</h4>
        <p class="results__author">${element.publisher}</p>
        </div>
        </a>
        </li>
        `
        recipesContainer.insertAdjacentHTML("afterbegin", htmlContent);
    });

    const listItems = document.querySelectorAll('.results__list li');
    // her bir list item'!a click event handler tanımladık.
    listItems.forEach(item => {
        item.addEventListener("click", ()=>getOneRecipe(item.id))
    });
    //console.log(listItems);
    // ul item'a click ekelyip oradan tıkaddığı yerdeki en yakın list item'a ulaştık
    // recipesContainer.onclick = function (e) {
    //   const listItem = e.target.closest("li")
    //   getOneRecipe(listItem.id)
    // }
};


