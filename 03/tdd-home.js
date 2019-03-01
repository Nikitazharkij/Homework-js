'use strict';

// сумма положительных чисел

function positiveSum(array) {

  var sum = 0;

  if (array === 'undefined') {
    return sum = 0;
  } else {

    for (var i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        sum += array[i];
      }
    }
    return sum;
  }

};

// четное или нечетное число

function evenOrOdd(num) {

  if (num % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
    }

  };

// какой век

function centuryFromYear(year) {

  var century = Math.ceil(year / 100);

  return century;

  };

// удаление элементов, встречающиеся во втором массиве

function arrayDiff(array, toRemove) {

  var filterArray = array.filter(function(number) {
    return toRemove.indexOf(number) < 0;
  });

return filterArray

};