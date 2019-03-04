'use strict';

// сравниваем остаток от деления
function division() {

  let a = +prompt('Введите число a');
  let b = +prompt('Введите число b');

  if (a % b === 0) {
    alert('Делится!');
  } else {
    alert('Делится с остатком ' + (a % b));
  }

};

