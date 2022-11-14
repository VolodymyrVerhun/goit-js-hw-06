

const inputEl = document.querySelector("#validation-input");

const changeClass = () => {
   if (Number(inputEl.value.length) === Number(inputEl.dataset.length)) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
   } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
   }
};

inputEl.addEventListener("blur", changeClass);

