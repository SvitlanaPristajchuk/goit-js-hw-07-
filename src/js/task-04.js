
/*## Задание 4

Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
значение счетчика на `1`.

- Создай переменную `counterValue` в которой будет хранится текущее значение
  счетчика.
- Создай функции `increment` и `decrement` для увеличения и уменьшения значения
  счетчика
- Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса*/ 

const counterEl = document.querySelector("#counter");
console.log('counterEl', counterEl);

const button1 = document.querySelector("[data-action='increment']");
const button2 = document.querySelector("[data-action='decrement']");
const value = document.querySelector("#value");
console.log('button1', button1);
console.log('button2', button2);
console.log('value', value);

  let counterValue = 0;
const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
};


const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};
button1.addEventListener('click', increment);
button2.addEventListener('click', decrement); 
