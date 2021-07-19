const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  /*Напиши скрипт, который для каждого элемента массива `ingredients` создаст
отдельный `li`, после чего вставит все `li` за одну операцию в список
`ul.ingredients`. Для создания DOM-узлов используй `document.createElement()`.*/
"use strict"

const ulList = document.querySelector ('#ingredients');
ingredients.forEach(ingredient => {
    let listIngridients = ulList.appendChild(document.createElement("li"));
    listIngridients.appendChild(document.createTextNode(ingredient));
});
console.log(ulList);