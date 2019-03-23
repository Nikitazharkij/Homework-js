'use strict';

// функция конструктор
function Timer(firstNumber, pause) {
  this.start = firstNumber;
  this.startCopy = this.start;
  this.pause = pause;
};

Timer.prototype.go = function() {
  const self = this;
  this.idTimer = setInterval(function(){
    console.log(--self.startCopy);
    self.stop();
  }, 1000)
};

Timer.prototype.stop = function() {
  if (this.start - this.startCopy === this.pause) {
    clearInterval(this.idTimer);
    console.log('Таймер остановлен');
  }
};

// Задаем начало отсчета и через сколько секунд остановить
var timer = new Timer(100, 5);

timer.go();
