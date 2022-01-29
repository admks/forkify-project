const likesContainer = document.querySelector('.likes__list');


export let likeList = [];

export const addFavourites = (e,recipe) => {
    //console.log(e.target)

    let isLiked = likeList.find(item=>item.id === recipe.id)
    if(isLiked){
        likeList = likeList.filter(item=>item.id !== recipe.id)
        console.log(likeList)
        e.target.firstElementChild.innerHTML = `<use href="img/icons.svg#icon-heart-outlined"></use>`
    } else {
        likeList.push(recipe)
        e.target.firstElementChild.innerHTML = `<use href="img/icons.svg#icon-heart"></use>`
    }
    console.log(likeList)
    likesContainer.innerHTML = "";
    likeList.forEach(item => {
        const htmlContent = `
                    <li>
                        <a class="likes__link" href="#23456">
                            <figure class="likes__fig">
                                <img src=${item.image_url} alt=${item.title}>
                            </figure>
                            <div class="likes__data">
                                <h4 class="likes__name">${item.title}</h4>
                                <p class="likes__author">${item.publisher}</p>
                            </div>
                        </a>
                    </li>
        `
        likesContainer.insertAdjacentHTML("afterbegin",htmlContent);
        
    });


}