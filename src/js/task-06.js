/*Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
на правильное количество символов.



- Сколько символов должно быть в инпуте, указывается в его атрибуте
  `data-length`.
- Если введено подходящее количество, то `border` инпута становится зеленым,
  если неправильное - красным.

Для добавления стилей, используй CSS-классы `valid` и `invalid`.*/



  /*const inputRef = document.querySelector('#name-input');



inputRef.addEventListener('input', onMouseEnter);
inputRef.addEventListener('inputout', onMouseLeave);


function onMouseEnter(event){
  //console.log(event.currentTarget.value.length);
const input = event.currentTarget;
input.classList.add('#validation-input.valid ');
}
function onMouseLeave(event) {
  const input = event.currentTarget;
  input.classList.add('#validation-input.invalid');
}*/
  //return refs.lengthLabel.textContent = event.currentTarget.value;*/


    const inputEL = document.querySelector('.input');
    console.log('inputEL', "inputEL");


//const inputLength = inputEl.dataset.length;

inputEl.addEventListener('change', el => {
    const text = el.target.value;
    if (text.length === +inputLength) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid"); 
    }
});