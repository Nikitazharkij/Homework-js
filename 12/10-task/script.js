const url = 'http://localhost:3006';

function getPosts() {

fetch(`${url}/posts`)
  .then(response => {
    if (response.status === 200) {
      return response.json()
    }
  })
  .then(data => renderPosts(data));

};

function getPost(id) {

fetch(`${url}/posts/${id}`)
  .then(response => {
    if (response.status === 200) {
      return response.json()
    }
  })
  .then(data => console.log(data));

};

function renderPosts(data) {

  data.forEach(post => {
    const div = document.createElement('div');

    const tmp = `<h3><a onclick="getPost(${post.id})">${post.title}</a></h3>
<p>${post.text}</p>
<span>${post.author}</span><br />
<a onclick="changePost(${post.id})">Change Post</a><br />
<a onclick="deletePost(${post.id})">Delete Post</a>
`;
    div.innerHTML = tmp;
    document.querySelector('body').appendChild(div);
  });

};

function sendData() {

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const text = document.getElementById('text').value;

    const data = {
        title,
        author,
        text,
    };

fetch(`${url}/posts`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(response => {
    if (response.status === 201) {
      return response.json()
    }
  })
  .then(console.log('Post was added'))

};

function changePost(id) {

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const text = document.getElementById('text').value;

    const data = {
        title,
        author,
        text,
    };

fetch(`${url}/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(response => {
    if (response.status === 200) {
      return response.json()
    }
  })
  .then(console.log('Post was changed'));

};

function deletePost(id) {

fetch(`${url}/posts/${id}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (response.status === 200) {
      return response.json()
    }
  })
  .then(console.log('Post was deleted'));

};


