'use strict';

// создаем форму
function createForm() {

  let body = document.querySelector('body');
  let div = document.createElement('div');

  div.style.width = '200px';
  div.style.paddingLeft = '10px';
  div.style.paddingBottom = '10px';
  div.style.border = '2px solid black';
  body.appendChild(div);

// создаем поле для ввода имени пользователя
  function createFormName() {

    let p = document.createElement('p');
    let input = document.createElement('input');

    p.style.marginTop = '10px';
    p.style.marginBottom = '10px';

    p.innerHTML = 'Введите Ваше имя: ';
    div.appendChild(p);
    div.appendChild(input);

  };

// создаем поле для ввода фамилии пользователя
  function createFormSurname() {

    let p = document.createElement('p');
    let input = document.createElement('input');

    p.style.marginTop = '10px';
    p.style.marginBottom = '10px';

    p.innerHTML = 'Введите Вашу фамилию: ';
    div.appendChild(p);
    div.appendChild(input);

  };

// создаем поле для ввода пароля пользователя
  function createFormPassword() {

    let p = document.createElement('p');
    let input = document.createElement('input');

    p.style.marginTop = '10px';
    p.style.marginBottom = '10px';

    p.innerHTML = 'Введите Ваш пароль: ';
    div.appendChild(p);
    div.appendChild(input);

  };

// создаем поле для ввода пароля пользователя
  function createFormEmail() {

    let p = document.createElement('p');
    let input = document.createElement('input');

    p.style.marginTop = '10px';
    p.style.marginBottom = '10px';

    p.innerHTML = 'Введите Ваш Email: ';
    div.appendChild(p);
    div.appendChild(input);

  };

  createFormName();
  createFormSurname();
  createFormPassword();
  createFormEmail();

};

