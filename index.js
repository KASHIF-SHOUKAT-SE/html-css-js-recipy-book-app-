const recipList = document.getElementById('recipList')
const addRecipeBtn = document.getElementById('addRecipeBtn')
const recipeModel = document.getElementById('recipeModel')
const recipeName = document.getElementById('recipeName')
const saveRecipeBtn = document.getElementById('saveRecipeBtn')
const closeModal = document.getElementsByClassName('close')[0];
const recipeIngredientsInput = document.getElementById('recipeIngredients');


const recipes = [];

function renderRecipes(){
    recipList.innerHTML = '';
    recipes.forEach((recipe, index)=>{
        const recipeDiv = document.createElement('div')
        recipeDiv.className = 'recipe';
        recipeDiv.innerHTML = `<h3>${recipe.name}</h3><p>${recipe.ingredients}</p>
        <button onclick="editRecipe(${index})">Edit</button>
        <button onclick="deleteRecipe(${index})">Delete</button>`
        recipList.appendChild(recipeDiv);
    })
}

function addRecipe(){
    const name = recipeName.value;
    const ingred =  recipeIngredientsInput.value
    if(name && ingred){
        recipes.push({ name, ingred })
        renderRecipes();
        closeModal.click();
    }else{
        alert('please enter text in input field')
    }
}

function deleteRecipe(index){
    recipes.splice(index,1)
    renderRecipes()
}

addRecipeBtn.addEventListener('click',()=> modal.style.display = 'block')
closeModal.addEventListener('click',()=> modal.style.display = 'none')
saveRecipeBtn.addEventListener('click',addRecipe)

window.addEventListener('click',(event)=>{
    if(event.target === modal){
        modal.style.display = 'none'
    }
})

renderRecipes()