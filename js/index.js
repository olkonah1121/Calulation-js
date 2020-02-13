const display = document.querySelector(".display");

document
  .querySelectorAll(".digits button")
  .forEach(button => button.addEventListener("click", digitPressed));
function digitPressed(ev) {
  display.value += ev.target.innerText;
}

document
  .querySelectorAll(".operations button")
  .forEach(button => button.addEventListener("click", operationsPressed));
function operationsPressed(ev) {
  display.value += ev.target.innerText;
}

document.querySelector(".equal").addEventListener("click", calculate);
function calculate() {
  if (eval(display.value) === Infinity) display.value = "I can not do this";
  else
    display.value[display.value.length - 1] == "+" ||
      display.value[display.value.length - 1] == "-" ||
      display.value[display.value.length - 1] == "*" ||
      display.value[display.value.length - 1] == "/" ||
      display.value[display.value.length - 1] == ".";
  display.value = eval(display.value);
}

document.querySelector(".clearall").addEventListener("click", clearResults);
function clearResults() {
  display.value = "";
}

document.querySelector(".clearone").addEventListener("click", deleteLast);
function deleteLast() {
  display.value = display.value.substring(0, display.value.length - 1);
}
