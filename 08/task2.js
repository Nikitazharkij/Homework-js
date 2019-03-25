'use strict';

// функция конструктор
function Pulse() {
  this.button = document.getElementById('button');
  this.buttonResult = document.getElementById('result');
  this.input = document.getElementById('input');
  this.message = document.getElementById('message');
};

Pulse.prototype.go = function(firstStart, secondStart) {

  this.firstStart = firstStart;
  this.secondStart = secondStart;

  this.start = this.firstStart + this.secondStart;

  const self = this;
  this.idTimer = setInterval(function(){

    if (self.start <= self.secondStart) {
      pulse.message.innerHTML = `Измерение... ${self.start--}`;
    } else {
      pulse.message.innerHTML = `Измерение начнется через ${self.start-- - self.secondStart}`;
    }

    if (self.start === -1) {
      self.stop();
    }
  }, 1000)
};

Pulse.prototype.stop = function() {
    clearInterval(this.idTimer);
    pulse.message.innerHTML = `Введите количество ударов за ${this.secondStart} секунд`;
};

Pulse.prototype.composition = function() {
    this.result = this.input.value;
    this.result = this.result * 4;
    return this.result;
}

Pulse.prototype.showResult = function() {

  this.total = this.composition();
  pulse.message.innerHTML = `Ваш пульс составляет ${this.total} ударов в минуту`;
}

const pulse = new Pulse();

  pulse.button.addEventListener('click', function () {
    pulse.go(5, 15);
  });

  pulse.buttonResult.addEventListener('click', function () {
    pulse.showResult();
  });
