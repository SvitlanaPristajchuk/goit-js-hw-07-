/*Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
    input), подставляет его текущее значение в `span#name-output`. Если инпут
    пустой, в спане должна отображаться строка `'незнакомец'`.*/
    let input = document.querySelector('#name-input');
    let output = document.querySelector('#name-output');

 input.oninput = function () {
   if (input.value === '') {
       outputName.innerHTML = 'незнакомец';
   } else {
        outputName.innerHTML = input.value;
  }
 }
