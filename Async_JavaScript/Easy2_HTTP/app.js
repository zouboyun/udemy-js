const http = new EasyHTTP();

// get users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// post new user
// http.post('https://jsonplaceholder.typicode.com/users', {
//   name: 'Alice',
//   phone: '1-789-000-123'
// })
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// update post
// http.put('https://jsonplaceholder.typicode.com/users/2', {
//   name: 'Alice',
//   phone: '1-789-000-123'
// })
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// delete post
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err))

