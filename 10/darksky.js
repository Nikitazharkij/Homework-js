const search = document.getElementById('search');

search.addEventListener('click', function () {
  loadData();
});

function loadData() {
    const xhr = new XMLHttpRequest();
    const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/0c522a9fd2ce6cb33a6cd3a1345af918/37.8267,-122.4233';

    xhr.open('GET', `${url}?exclude=currently,minutely,hourly,flags`);

    xhr.send();

    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4 && xhr.status === 200) {
          renderData(JSON.parse(xhr.responseText));
      }
    };
}

function renderData(data){
    const container = document.getElementById('results');
    container.innerHTML = '';

    const tmp = `<h3>${data.daily.summary}</h3>`;
    console.log(data.daily.summary);
    // data.dayli.data.forEach(function(item){
       const div = document.createElement('div');
    //    const tmp = `<h3>${item}</h3>`;
       div.innerHTML = tmp;
       container.appendChild(div);
    // });
}