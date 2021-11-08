'use strict';

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');
const ingredientsArray = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const listItemEl = document.createElement('li');
  listItemEl.classList.add('item');
  listItemEl.textContent = ingredients[i];
  ingredientsArray.push(listItemEl);
}

ingredientsListEl.append(...ingredientsArray);
