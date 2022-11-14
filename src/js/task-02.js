const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientEl = document.querySelector('#ingredients');


const markup = ingredients.map(ingredient => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
});

ingredientEl.append(...markup);