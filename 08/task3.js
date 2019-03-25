'use strict';

function getRandom(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};

let idTimer = setInterval(function() {
  let randomNumber = getRandom(1, 100);

  if (randomNumber % 2 == 0) {
    try {
      throw 'Error happens'
    } catch (e) {
        console.log(e);
    } finally {
      console.log(`${randomNumber}`);
    }
  } else {
      console.log(`Success`);
      console.log(`${randomNumber}`);
  }

}, 1000);

setTimeout(function() {
  clearInterval(idTimer);
}, 20000);