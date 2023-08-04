const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const liEl = ingredients.map((el) => ingredientsList(el));

liEl.classList.add("item");
liEl.innerHTML = el;
ingredientsList.append(liEl);
