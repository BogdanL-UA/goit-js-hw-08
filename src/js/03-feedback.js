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
    localStorage.removeItem('MESSAGE');
    console.log(formData);
    refs.form.reset();
  }
};

const onInputSetValueInLS = event => {
  if (event.target.value.trim() !== '') {
    formData[event.target.name] = event.target.value;
    const { email, message } = formData;
    if (email) {
      localStorage.setItem(FORM_KEY_LS, email);
    }
    if (message) {
      localStorage.setItem('MESSAGE', message);
    }
  }
};

const filledEmailFilld = emailFromLS => {
  if (emailFromLS !== undefined) {
    refs.email.value = emailFromLS;
  } else {
    refs.email.value = '';
  }
};

const filledMessageFilld = messageFromLS => {
  if (messageFromLS !== undefined) {
    refs.message.value = messageFromLS;
  } else {
    refs.message.value = '';
  }
};

getFormDataFromLS();

function getFormDataFromLS() {
  const emailFromLS = localStorage.getItem(FORM_KEY_LS);
  const messageFromLS = localStorage.getItem('MESSAGE');
  filledEmailFilld(emailFromLS);
  filledMessageFilld(messageFromLS);
}

refs.form.addEventListener('input', throttle(onInputSetValueInLS, 500));
refs.submit.addEventListener('click', onSubmitClick);
