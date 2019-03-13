'use strict';

function getSecondsToDayEnd() {
  let clock = document.getElementById('clock');
  let timeNow = new Date();
  let nextDay = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate() + 1);

  clock.innerText = Math.round((nextDay - timeNow)/1000);
}

getSecondsToDayEnd();
setInterval(getSecondsToDayEnd, 1000);