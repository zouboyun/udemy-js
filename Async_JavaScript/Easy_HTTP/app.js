// this is for testing the library
const http = new EasyHTTP();

// get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(JSON.parse(response));
//   }
// });

// post new post
const data = {
  title: 'Custom Popo',
  body: 'This is a test post.'
}
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.parse(post));
  }
});