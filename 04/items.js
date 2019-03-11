'use strict';

function items() {
  let items = [
    {
      name: 'snikers',
      id: 1,
      unit: 'box',
      number: 20,
      price: '25$'
    },
    {
      name: 'coca-cola',
      id: 2,
      unit: 'pieces',
      number: 100,
      price: '1$'
    },
    {
      name: 'lays',
      id: 3,
      unit: 'pack',
      number: 50,
      price: '5$'
    },
  ];

  let sum = 0;

  for (let i = 0; i < items.length; i++) {
    sum += parseInt(items[i]['price']) * items[i]['number'];
  }

  console.log(sum);
}