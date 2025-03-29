const form = document.querySelector('.feedback-form');
const input = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';
let formData = {
  email: '',
  message: ''
}

if (localStorage.getItem(localStorageKey)) {
  formData = JSON.parse(localStorage.getItem(localStorageKey));
  input.value = formData.email;
  textarea.value = formData.message;
}

form.addEventListener('input', (e) => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
});