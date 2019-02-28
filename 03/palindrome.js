'use strict';

function palindrome() {

    //Сравнение букв в слове
    var word = prompt('Введите слово для проверки на палиндромность: ');
    var halfLength = Math.round(word.length / 2);
    var flag = true;

    for (var i = 0; i < halfLength; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            flag = false;
            break;
        }
    }

    //Вывод сообщения, является слово палиндромом или нет
    if (flag === true) {
        alert('Слово палиндром');
    } else {
        alert('Слово не является палиндром');
    }

}
