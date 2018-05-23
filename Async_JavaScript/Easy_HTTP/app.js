// this is for testing the library
const http = new EasyHTTP();

// get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(JSON.parse(post));
//   }
// });

// post new post
const data = {
  title: 'Custom Popo',
  body: 'This is a test post.'
}
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(JSON.parse(post));
//   }
// });

// Update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//     if (err) {
//     console.log(err);
//   } else {
//     console.log(JSON.parse(post));
//   }
// })

// get posts
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});