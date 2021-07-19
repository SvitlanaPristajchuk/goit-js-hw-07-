const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
  
/*Напиши скрипт для создания галлереи изображений по массиву данных.



Используй массив объектов `images` для создания тегов `img` вложенных в `li`.
Для создания разметки используй шаблонные строки и `insertAdjacentHTML()`.

- Все элементы галереи должны добавляться в DOM за одну операцию вставки.
- Добавь минимальное оформление галереи флексбоксами или гридами через
  css-классы.*/
  "use strict"

  const galleryList = document.querySelector('#gallery');
  console.log('galleryList', galleryList);
const galleryListEl = document.createElement ('li');
galleryListEl.classList.add('list_images');


//console.log('galleryListEl', galleryListEl);
const addNewListEl = images.map(image => {
  const addNewListElImg = `<li class="list_images"><img src="${image.url}" alt="${image .alt}" width=250 height=150></li>`;
  return addNewListElImg;
});
galleryList.insertAdjacentHTML("beforeend", addNewListEl.join(' '));
galleryList.setAttribute("style", "list-style:none; display: flex; justify-content: center; background-color: red;");



  
