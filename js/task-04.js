// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// // Обновляй интерфейс новым значением переменной counterValue.



const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
        return valueEl.textContent = this.value;
    },
    decrement() {
        this.value -= 1;
        return valueEl.textContent = counterValue.value;
    }
};

decrementBtn.addEventListener('click', function () {
    counterValue.decrement();
});

incrementBtn.addEventListener('click', function () {
    counterValue.increment();
});