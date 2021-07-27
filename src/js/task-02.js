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




/*const ingredients = document.querySelector("#ingredients");
console.log(ingredients);

const makeAllList = ingredients.map(ingredient => ingredient.document.createElement("li").document.createTextNode(ingredient))
console.log(makeAllLis);

 /*const lastUlList = makeAllList(ingredients);
 ulList.append(...lastUlList)

 const map1 = array1.map(x => x * 2);
/*var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
    let listIngridients = ulList.append(document.createElement("li"));
    listIngridients.append(document.createTextNode(ingredient));

console.log(ulList);*/

"use strict"

const ulList = document.querySelector ('#ingredients');
ingredients.forEach(ingredient => {
    let listIngridients = ulList.appendChild(document.createElement("li"));
    listIngridients.appendChild(document.createTextNode(ingredient));
});
console.log(ulList);


