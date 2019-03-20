'use strict';

function user() {

  const elem = document.getElementById('elem');

  function func(surname, name) {
    alert(this.value + ', ' + surname + ' ' + name);
  }

// задаем значение для this
  var func = func.bind(elem);

  func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
  func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

}
