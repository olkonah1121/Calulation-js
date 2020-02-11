const display = document.querySelector ('.display')
document.querySelectorAll ('.digits button')
 .forEach( button => button.addEventListener('click', digitPressed));
 function digitPressed(ev) {
     display.value += ev.target.innerText;
 }

 document.querySelectorAll ('.operations button')
 .forEach( button => button.addEventListener('click', operationsPressed));
 function operationsPressed(ev) {
     display.value += ev.target.innerText;
 }
 document.querySelector('.equal').addEventListener('click' ,calculate);
 function calculate() {
     display.value = eval(display.value);
 }

