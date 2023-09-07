const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients"); 

let liEl;

const ingredientsItem = ingredients.map((ingredient) => {
let liEl = document.createElement("li");
liEl.classList.add("item");

 console.log(liEl);
});


ingredientsList.insertAdjacentElement("beforebegin", ingredientsItem);



