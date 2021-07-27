/*Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
на правильное количество символов.



- Сколько символов должно быть в инпуте, указывается в его атрибуте
  `data-length`.
- Если введено подходящее количество, то `border` инпута становится зеленым,
  если неправильное - красным.

Для добавления стилей, используй CSS-классы `valid` и `invalid`.*/


/*const refs = {
   input: document.querySelector('#validation-input'),
  lengthLabel:  document.querySelector("data-length"),

}
console.log(refs)

refs.input.addEventListener('input', onMouseEnter);
refs.input.addEventListener('inputout', onMouseLeave);


function onMouseEnter(event){
  //console.log(event.currentTarget.value.length);
  refs.input = event.currentTarget;
refs.input.classList.add('#validation-input.valid ');
}
function onMouseLeave(event) {
  refs.input = event.currentTarget;
  refs.input.classList.add('#validation-input.invalid');
}
   refs.lengthLabel.textContent = event.currentTarget.value;*/

   const inputEl = document.querySelector ("#validation-input");
   const inputLength = inputEl.dataset.length;
   
   const input = document.querySelector('input');
   inputEl.addEventListener('change', el => {
       const text = el.target.value;
       if (text.length === +inputLength) {
           inputEl.classList.add("valid");
       } else {
           inputEl.classList.replace("valid", "invalid");
         
       }
   });
   