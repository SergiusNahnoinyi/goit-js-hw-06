'use strict';

// Кол-во категорий
const categoriesListEl = document.querySelector('#categories');

const categoriesCount = categoriesListEl.childElementCount;
console.log('Number of categories:', categoriesCount);

// Категория: Animals
const firstCategoriesItem = categoriesListEl.firstElementChild;

const firstCategoriesItemTitle = firstCategoriesItem.firstElementChild;
console.log('Category:', firstCategoriesItemTitle.textContent);

const firstCategoriesItemList = firstCategoriesItem.lastElementChild;
const firstCategoriesElementsCount = firstCategoriesItemList.childElementCount;
console.log('Elements:', firstCategoriesElementsCount);

// Категория: Products
const secondCategoriesItem = firstCategoriesItem.nextElementSibling;

const secondCategoriesItemTitle = secondCategoriesItem.firstElementChild;
console.log('Category:', secondCategoriesItemTitle.textContent);

const secondCategoriesItemList = secondCategoriesItem.lastElementChild;

const secondCategoriesElementsCount =
  secondCategoriesItemList.childElementCount;
console.log('Elements:', secondCategoriesElementsCount);

// Категория: Technologies
const lastCategoriesItem = categoriesListEl.lastElementChild;

const lastCategoriesItemTitle = lastCategoriesItem.firstElementChild;
console.log('Category:', lastCategoriesItemTitle.textContent);

const lastCategoriesItemList = lastCategoriesItem.lastElementChild;
const lastCategoriesElementsCount = lastCategoriesItemList.childElementCount;
console.log('Elements:', lastCategoriesElementsCount);
