/*Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
    input), подставляет его текущее значение в `span#name-output`. Если инпут
    пустой, в спане должна отображаться строка `'незнакомец'`.*/
   /* let input = document.querySelector('#name-input');
    let output = document.querySelector('#name-output');

 input.oninput = function () {
   if (input.value === '') {
       outputName.innerHTML = 'незнакомец';
   } else {
        outputName.innerHTML = input.value;
  }
 }*/
const refs = {
    input: document.querySelector('#validation-input'),
    nameLabel: document.querySelector('#name-output'),
}
refs.input.addEventListener('input', onInputChange);

function onInputChange(event){
    console.log(event.currentTarget.value);
    return refs.nameLabel.textContent = event.currentTarget.value;

}