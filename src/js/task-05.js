/*Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
    input), подставляет его текущее значение в `span#name-output`. Если инпут
    пустой, в спане должна отображаться строка `'незнакомец'`.*/

const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
}
//refs.input.addEventListener('input', onInputChange);

//function onInputChange(event){
    //console.log(event.currentTarget.value);
    //return refs.nameLabel.textContent = event.currentTarget.value;
//}

refs.input.oninput = function () {
    if (refs.input.value === "") {
        refs.nameLabel.innerHTML ="незнакомец";
    } else {
        refs.nameLabel.innerHTML = refs.input.value;
    }
};

