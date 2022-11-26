import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
  submit: document.querySelector('button'),
};
const FORM_KEY_LS = 'feedback-form-state';
const formData = {};

const onSubmitClick = event => {
  event.preventDefault();
  if (refs.email.value === '') {
    alert('All filds of the form must be filled!');
  } else if (refs.message.value === '') {
    alert('All filds of the form must be filled!');
  } else {
    localStorage.removeItem(FORM_KEY_LS);
    console.log(formData);
    refs.form.reset();
  }
};

const onInputSetValueInLS = event => {
  if (event.target.value.trim() !== '') {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(FORM_KEY_LS, JSON.stringify(formData));
  }
};

const checkLS = parsedFormData => {
  if (parsedFormData === null) {
    return;
  }
  if (parsedFormData.email !== '') {
    refs.email.value = parsedFormData.email;
  }
  if (parsedFormData.message !== '') {
    refs.message.value = parsedFormData.message;
  }
};

getFormDataFromLS();

function getFormDataFromLS() {
  const sevedFormData = localStorage.getItem(FORM_KEY_LS);
  const parsedFormData = JSON.parse(sevedFormData);
  checkLS(parsedFormData);
}

refs.form.addEventListener('input', throttle(onInputSetValueInLS, 500));
refs.submit.addEventListener('click', onSubmitClick);
