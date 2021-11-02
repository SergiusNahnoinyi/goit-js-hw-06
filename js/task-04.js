'use strict';

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const decrementButton = document.querySelector(
  'button[data-action="decrement"]',
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]',
);
const ValueEl = document.querySelector('#value');

decrementButton.addEventListener('click', function () {
  counterValue.decrement();
  ValueEl.textContent = counterValue.value;
});

incrementButton.addEventListener('click', function () {
  counterValue.increment();
  ValueEl.textContent = counterValue.value;
});
