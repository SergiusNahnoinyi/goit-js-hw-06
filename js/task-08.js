'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const formData = new FormData(event.currentTarget);

  if (formElements.email.value === '' || formElements.password.value === '') {
    return alert('Please fill in all the fields!');
  } else
    formData.forEach((value, name) => {
      console.log(name, value);
    });

  event.currentTarget.reset();
}
