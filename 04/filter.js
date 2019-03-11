'use strict';

// фильтруем нежелательные слова
function filterBadWords() {

  function filter(sentence, badWords) {

    let array;
    let filterArray;
    let goodSentence;

    array = sentence.split(' ');

    filterArray = array.filter(function(item) {
      return badWords.indexOf(item) < 0;
    });

    goodSentence = filterArray.join(' ');

    console.log(sentence);
    console.log(badWords);
    console.log(goodSentence);
    return goodSentence;

  }

  filter(
    'здесь есть очень плохое слово',
    ['здесь', 'очень']
  );
}
