'use strict';

function partialFunction() {

// создаем каррирование функции
  function partial(fn, ...partialArgs) {

    return function(...anotherArgs) {
      return fn.apply(this, partialArgs.concat(anotherArgs));

    }
  }

  function mult(a, b, c, d) {

    return a * b * c * d;

  }

  console.log(mult(2, 3, 4, 5)); // 120

  let mult23 = partial(mult, 2, 3);

  console.log(mult23(4, 5)); //120

}


