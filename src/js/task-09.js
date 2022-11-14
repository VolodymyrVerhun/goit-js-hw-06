function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyEl = document.querySelector('body');
const bagColorEl = document.querySelector('.color');
const changeColorEl = document.querySelector('.change-color');

changeColorEl.addEventListener('click', () => {
  let newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  bagColorEl.textContent = newColor;
})