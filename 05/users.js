'use strict';

  let users1 = [
      {
        id: 1,
        name: 'Коля',
        dob: '1999-01-01'
      },
      {
        id: 2,
        name: 'Петя',
        dob: '1988-11-23'
      },
      {
        id: 3,
        name: 'Вася',
        dob: '2000-09-13'
      },
    ];

  let users2 = [
      {
        id: 1,
        name: 'Джордж',
        dob: '1991-01-01'
      },
      {
        id: 2,
        name: 'Джон',
        dob: '1989-10-25'
      },
      {
        id: 3,
        name: 'Майкл',
        dob: '2000-09-13'
      },
    ];

function usersSort(param1, param2) {

  if (param2 === 'id') {
      param1.sort(function(a, b) {
        return a.id - b.id;
      })
  }

  if (param2 === 'name') {
    param1.sort(function(a, b) {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();

      if (nameA > nameB) {
        return 1;
      }

      if (nameA < nameB) {
        return -1;
      }

      return 0;

    })
  }

  if (param2 === 'dob') {
    param1.sort(function(a, b) {
      let dateA = new Date(a.dob);
      let dateB = new Date(b.dob);

      return dateA - dateB;
    })
  }

  if (param3 === 'desc') {
    return param1.reverse();
  }

  return param1;

}

function showArray() {

  console.log(usersSort(users1, 'dob', 'asc'));
}

showArray();