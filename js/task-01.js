'use strict';

const categoriesListEl = document.querySelector('#categories');
console.log('Number of categories:', categoriesListEl.childElementCount);

const categoriesItemEl = document.querySelectorAll('li.item');
categoriesItemEl.forEach(item => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.childElementCount);
});
