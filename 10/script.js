'use strict'

function RestApi(url) {

  this.posts = document.getElementById('posts');
  this.send = document.getElementById('send');

  this.getPosts = function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${url}/posts`);
    xhr.send();

    xhr.onreadystatechange = function(){
      const self = this;

      if (xhr.readyState === 4 && xhr.status === 200) {
          self.renderPosts(JSON.parse(xhr.responseText));
          return true;
      }
    };
  }

  this.getPost = function(id) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${url}/posts/${id}`);
    xhr.send();

    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(JSON.parse(xhr.responseText));
          return true;
      }
    };
  }

  this.renderPosts = function(data) {
    data.forEach(function(post){
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
  }

  this.sendData = function() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const text = document.getElementById('text').value;

    const data = {
        title,
        author,
        text,
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${url}/posts`);

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 201) {
            console.log('Post was added');
        }
    }
  }

  this.changePost = function(id) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const text = document.getElementById('text').value;

    const data = {
        title,
        author,
        text,
    };

    const xhr = new XMLHttpRequest();
    xhr.open('PUT', `${url}/posts/${id}`);

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Post was changed');
        }
    }
  }

  this.deletePost = function(id) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `${url}/posts/${id}`);
    xhr.send();

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Post was deleted:', JSON.parse(xhr.responseText));
            return true;
        }
    };
  }
}

const api = new RestApi('http://localhost:3006');

  api.posts.addEventListener('click', function(){
    api.getPosts();
  });

  api.send.addEventListener('click', function(){
    api.sendData();
  });
