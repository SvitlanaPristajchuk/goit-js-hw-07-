/*Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в `ul#categories`, то есть
элементов `li.item`. Получится `'В списке 3 категории.'`.

Для каждого элемента `li.item` в списке `ul#categories`, найдет и выведет в
консоль текст заголовка элемента (тега h2) и количество элементов в категории
(всех вложенных в него элементов `li`).

Например для первой категории получится:

- Категория: Животные
- Количество элементов: 4*/

"use strict"

const totalCategories = document.querySelectorAll('li.item');
console.log (`В списке ${totalCategories.length} категории.`);

for (const category of totalCategories) {
  let titleList = category.firstElementChild.textContent;
  console.log(`Категория: ${titleList}`);
  let sumEl = category.lastElementChild.children.length;

  console.log(`Количество элементов: ${sumEl}`);
};



