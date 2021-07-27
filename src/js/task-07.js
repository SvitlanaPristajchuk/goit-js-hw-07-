/*
Напиши скрипт, который реагирует на изменение значения `input#font-size-control`
(событие input) и изменяет инлайн-стиль `span#text` обновляя свойство
`font-size`. В результате при перетаскивании ползунка будет меняться размер
текста.*/

/*const refs = {
    inputEl: document.querySelector("#font-size-control"),
    textEl: document.querySelector("#text"),
}
console.log(refs);


function onChangeFontSize (event) {
const fontSise = + event.currentTarget.value;
refs.textEl.style.fontSise = `${fontSise}px`

}
refs.inputEl.addEventListener('input', onChangeFontSize);*/
const refs = {
    inputEl: document.querySelector("#font-size-control"),
    textEl: document.querySelector("#text"),
}
console.log(refs);

    refs.inputEl.oninput = function() {
      refs.textEl.style.fontSize = refs.inputEl.value + "px";
    };