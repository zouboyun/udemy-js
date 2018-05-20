class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
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

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  sendMsg(msg, msgType) {
    const bookForm = document.getElementById('book-form');
    const message = document.createElement('div');
    message.innerHTML = msg;
    message.className = `alert ${msgType}`;
    bookForm.prepend(message);
    setTimeout(function() {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  removeBook(target) {
    if (target.className === 'delete') {
      if (confirm(`Are you sure you want to delete ${target.parentElement.parentElement.firstElementChild.textContent}?`)) {
        target.parentElement.parentElement.remove();
        // delete book from local storage
        LocalStorage.removeBooks(target.parentElement.previousElementSibling.textContent);
        // show success after deleting book
        const ui = new UI();
        ui.sendMsg(`Book <i>${target.parentElement.parentElement.firstElementChild.textContent}</i> is successfully removed from your list!`, 'success');
      }
    }
  }
}

// Local Storage class
class LocalStorage {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  static displayBooks() {
    let books = LocalStorage.getBooks();
    books.forEach(function(book) {
      const ui = new UI();
      ui.addBookToList(book);
    })
  }
  static addBooks(book) {
    let books = LocalStorage.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
  static removeBooks(isbn) {
    let books = LocalStorage.getBooks();
    books.forEach(function(book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Event Listener - display book when reload
document.addEventListener('DOMContentLoaded', LocalStorage.displayBooks)

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
    // add book to local storage
    LocalStorage.addBooks(book);
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

  e.preventDefault();
})