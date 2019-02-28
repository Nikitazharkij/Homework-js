'use strict';

function anketa() {
    var fio = '';
    var age;
    var ageDays;
    var ageFuture;
    var pensAge;
    var polPerson;

    //Спрашиваем ФИО человека
    function getFIO() {

        var count = 0;
        var questions = [
            'Введите Вашу фамилию: ',
            'Введите Ваше имя: ',
            'Введите Ваше отчество: '
        ];
        var answer;

        while(count < 3) {
            answer = prompt(questions[count]);

            if (answer === null) {
                continue;
            } else {
                if (
                    (answer.match(/[a-zA-Zа-яА-Я]/g) === null)
                    || (answer.match(/[1-9]/g) !== null)
                ) {
                    continue;
                } else {
                    fio += answer + ' ';
                    count++;
                }
            }
        }

    }

    //Спрашиваем возраст человека
    function getAge() {
        age = prompt('Введите Ваш возраст: ');

        if (isFinite(age) && (parseInt(age) > 0) && (parseInt(age) < 120)) {
            ageDays = parseInt(age) * 365;
            ageFuture = parseInt(age) + 5;
        } else {
            getAge();
        }
    }

    //Спрашиваем пол человека
    function getPol() {
        var pens;
        var pol = confirm('Ваш пол - мужской?');

        pol?pens = 65:pens = 60;

        if ((pens == 65 && age >= pens) || (pens == 60 && age >= pens)) {
            pensAge = 'да';
        } else {
            pensAge = 'нет';
        }

        if (pol) {
            polPerson = 'мужской';
        } else {
            polPerson = 'женский';
        }

    }

    getFIO();
    getAge();
    getPol();

    //Выводим данные о человеке
    alert(
        'ваше ФИО: ' + fio +
        '\nваш возраст в годах: ' + age +
        '\nваш возраст в днях: ' + ageDays +
        '\nчерез 5 лет вам будет: ' + ageFuture +
        '\nваш пол: ' + polPerson +
        '\nвы на пенсии: ' + pensAge
    );

}
