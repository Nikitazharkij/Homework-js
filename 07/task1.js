'use strict';

function line() {

// создаем фунцию генератор
function sequence(start, step) {

  start = start || 0;
  step = step || 1;

  let currentState = start - step;

    return function() {
      return currentState += step;
    }
}

let generator = sequence(10, 3);
let generator2 = sequence(7, 1);

console.log(generator());
console.log(generator());
console.log('---------');
console.log(generator2());
console.log('---------');
console.log(generator());
console.log('---------');
console.log(generator2());

}

