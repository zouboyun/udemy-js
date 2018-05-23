// mocking server behavior by setting 2s to create post and 1s to get post

const posts = [
  {title: 'Post One', body: 'This is post one.'},
  {title: 'Post Two', body: 'This is post two.'}
];

function createPost(post) {
  setTimeout(function() {
    posts.push(post);
  }, 2000);
}

function getPost() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    })
    document.body.innerHTML = output;
  }, 1000);
}

function updatePost() {

}

function deletePost() {

}

createPost({title: 'Post Three', body: 'This is post three.'});
getPost();