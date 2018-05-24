const posts = [
  {title: 'Post One', body: 'This is a post.'},
  {title: 'Post Two', body: 'This is a post.'}
]

// use promise in createPost
// it is called promise because when certain things are done, some other things will happen like promised
// when resolve, we call some function; when reject, we show error
function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve('You got it.');
      } else {
        reject('Something went wrong.')
      }
    }, 2000)
  })
}

function getPosts(msg) {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000);
  console.log(msg);
}

// on resolve call the callback in then; on reject call the call back in catch
createPost({title: 'Post Three', body: 'This is a post.'})
.then(getPosts)
.catch(function(err) {
  console.log(err);
});

// await -- adding async in front of function returns a promise
async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 5000);
  });
  const res =  await promise; // wait until the promise is resolved
  return res;
}

myFunc()
  .then(res => console.log(res));

async function getUsers() {
  const res = await fetch
  ('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  return data;
}

getUsers()
  .then(users => console.log(users));