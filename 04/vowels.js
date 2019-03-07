'use strict';

// считаем количество гласных
function vowelsCount() {

  let str = prompt('Введите строку');
  let count = 0;

  const vowels = [
    'а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я',
    'А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я'
  ];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count += 1;
      }
    }
  }

  console.log(count);

};