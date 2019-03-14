'use strict';

function getDaysToBirthday() {

  let yearNow;
  let input = document.getElementById('input1');
  let button = document.getElementById('button1');
  let dateNow = new Date();

  const msecInDay = 24 * 60 * 60 * 1000;


  dateNow.setHours(0,0,0,0);
  yearNow = dateNow.getFullYear();

  button.onclick = function () {
    let result;
    let dateBirthday = input.value;
    let array = dateBirthday.split('-').map(Number);
    let dateNewBirthday = new Date(yearNow, array[1] - 1, array[2]);

    if (dateNow > dateNewBirthday) {
      dateNewBirthday.setFullYear(yearNow + 1);
    }

    result = (dateNewBirthday.getTime() - dateNow.getTime())/msecInDay;

    if (result === 0) {
      alert(`Сегодня День рождения!!!`);
    } else {
      alert(`Дней осталось до Дня рождения: ${result} !`);
    }

    return result;

    }

}

getDaysToBirthday();
