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

const markup = ingredients
  .map(ingredient => `<li class="item">${ingredient}</li>`)
  .join('');

ingredientsListEl.innerHTML = markup;
