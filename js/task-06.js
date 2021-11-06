'use strict';

const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', () => {
  if (textInput.value.length >= textInput.dataset.length) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else {
    textInput.classList.add('invalid');
  }
});
