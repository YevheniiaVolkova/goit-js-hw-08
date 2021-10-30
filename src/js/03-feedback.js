import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const formData = {};
getSavedFormData();

formEl .textarea.addEventListener('input', throttle(onInput, 500));
formEl .input.addEventListener('input', throttle(onInput, 500));
formEl .form.addEventListener('submit', onFormSubmit);

function onInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getSavedFormData() {
  const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedFormData) {
    formEl .textarea.value = savedFormData.message;
    formData.message = savedFormData.message;
    formEl .input.value = savedFormData.email;
    formData.email = savedFormData.email;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}