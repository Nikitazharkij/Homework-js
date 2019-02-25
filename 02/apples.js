
    "use strict";

// сравниваем остаток от деления
    function getNumWord(num, word1, word2, word3) {

        var dd = num % 100;
        var d = num % 10;

        switch (true) {
            case dd >= 11 && dd <= 19:
                return word3;
            break;
            case d == 1:
                return word1;
            break;
            case d >= 2 && d <= 4:
                return word2;
            break;
        }

        return word3;
    };

// выводим фразу о количестве яблок в правильном склонении
    function test() {
        var apples = +prompt('Сколько у вас яблок?');

        alert('У вас ' + apples + ' ' + getNumWord(apples, 'яблоко', 'яблока', 'яблок') + '!');
    }

