// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() {}

// addBookToList
UI.prototype.addBookToList = function(book) {
  // fetch the booklist element from DOM
  const list = document.getElementById('book-list');
  // create new element
  const row = document.createElement('tr');
  // insert columns into the new row using td tags (standard cells)
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><button type="delete" class="delete">remove</button></td>
  `;
  list.appendChild(row);
}

// clearFields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// sendMsg
UI.prototype.sendMsg = function(msg, msgType) {
  const bookForm = document.getElementById('book-form');
  const message = document.createElement('div');
  message.innerHTML = msg;
  message.className = `alert ${msgType}`;
  bookForm.prepend(message);
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000);
}

// removeBook
UI.prototype.removeBook = function(target) {
  if (target.className === 'delete') {
    if (confirm('Are you sure you want to delete?')) {
      target.parentElement.parentElement.remove();
    }
  }
}

// Event Listener - add book
document.querySelector('#book-form').addEventListener('submit', function(e) {
  // fetch values from UI input
  const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;
  // instantiate book
  const book = new Book(title, author, isbn);
  // instantiate UI
  const ui = new UI();
  // validation
  if (title === '' || author === '' || isbn === '') {
    ui.sendMsg('Please fill in all fields.', 'error');
  } else {
    // add book to the book list
    ui.addBookToList(book);
    // clear UI input once submit
    ui.clearFields();
    // show success after adding book
    ui.sendMsg(`Book <i>${title}</i> is successfully added to your list!`, 'success');
  }

  e.preventDefault();
})

// Event Listener -- remove book
document.querySelector('#book-list').addEventListener('click', function(e) {
// instantiate UI
  const ui = new UI();
  // delete book from UI;
  ui.removeBook(e.target);
  // show success after deleting book
  ui.sendMsg(`Book is successfully removed from your list!`, 'success');

  e.preventDefault();
})