'use strict';

// создаем форму для заполнения
function createForm() {

  let body = document.querySelector('body');
  let div = document.createElement('div');
  let button = document.createElement('button');

  const str = [
    'Введите Ваше имя: ',
    'Введите Вашу фамилию: ',
    'Введите Ваш пароль: ',
    'Введите Ваш Email: '
  ];

  div.style.width = '200px';
  div.style.paddingLeft = '10px';
  div.style.paddingBottom = '10px';
  div.style.border = '2px solid black';
  body.appendChild(div);

  for (let i = 0; i < str.length; i++) {

    let p = document.createElement('p');
    let input = document.createElement('input');

    p.style.marginTop = '10px';
    p.style.marginBottom = '10px';

    input.id = 'input' + (i + 1);
    p.innerHTML = str[i];
    div.appendChild(p);
    div.appendChild(input);

  };

  button.style.marginTop = '10px';
  div.appendChild(button);
  button.innerHTML = 'Отправить';

  button.onclick = function () {

    removeSpace();
    checkPassword();
    checkEmail()
    checkForm();

  };

// удаляем пробелы до и после имени и фамилии
  function removeSpace() {

    let name = document.getElementById('input1');
    let surname = document.getElementById('input2');

    while (name.value[0] === ' ') {
      name.value = name.value.slice(1);
    }

    while (name.value[name.value.length - 1] === ' ') {
      name.value = name.value.slice(0, -1);
    }

    while (surname.value[0] === ' ') {
      surname.value = surname.value.slice(1);
    }

    while (surname.value[surname.value.length - 1] === ' ') {
      surname.value = surname.value.slice(0, -1);
    }

  };

// проверка длины пароля
  function checkPassword() {

    let password = document.getElementById('input3');

    if (password.value.length > 4) {
      return true;
    }

      return false;

  };

  // проверка правильности заполнения email
  function checkEmail() {

    let email = document.getElementById('input4');
    let countSign = 0;
    let countSpace = 0;

    for (let i = 0; i < email.value.length; i++) {

      if (email.value[i] === '@') {
        countSign += 1;
      }

      if (email.value[i] === ' ') {
        countSpace += 1;
      }

    }

    if (countSign === 1 && countSpace === 0) {
      return true;
    }

      return false;

  };

// проверка правильности заполнения пароля и email
  function checkForm() {

    if (checkPassword() && checkEmail()) {
      console.log('true');
      return true;
    }

    console.log('false');
    return false;

  };

};

