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


const makeNewList = (ingredient) => {
 return ingredients.map((ingredient) => {
const ingredientItem =  document.createElement("li");
ingredientItem.textContent = ingredient;
return ingredientItem
})
}
const list = makeNewList(ingredients);
ulList .append(...list)
console.log (list)