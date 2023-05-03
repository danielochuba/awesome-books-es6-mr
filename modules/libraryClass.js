import Book from './bookClass.js';

export default class Library {
  constructor(container, titleInput, authorInput, addBtn) {
    this.booksContainer = document.querySelector(container);
    this.titleInput = document.getElementById(titleInput);
    this.authorInput = document.getElementById(authorInput);
    this.addBtn = document.querySelector(addBtn);

    this.books = JSON.parse(localStorage.getItem('books')) || [];

    this.displayBooks();
    this.addEventListeners();
  }

  addBook(title, author, id) {
    const book = new Book(title, author, id);
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  removeBook(index) {
    this.books = this.books.filter((book) => book.id !== index);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  displayBooks() {
    this.booksContainer.innerHTML = '';
    this.books.forEach((book) => {
      const row = document.createElement('tr');
      row.className = 'row';
      row.innerHTML = `
          <td class="content"><strong>${book.title}</strong><em> &ensp;by&ensp; </em>  <strong>${book.author}<strong></td> 
          <td class ="delete" ><button id="${book.id}" class="delete-btn" ><strong class="delete-button">Remove</strong></button></td>
        `;
      this.booksContainer.appendChild(row);
      const removeBtn = row.querySelector('.delete-btn');

      removeBtn.addEventListener('click', () => {
        this.removeBook(book.id);
      });
    });
  }

  addEventListeners() {
    this.addBtn.addEventListener('click', () => {
      if (this.titleInput.value !== '' && this.authorInput.value !== '') {
        const titleValue = this.titleInput.value;
        const authorValue = this.authorInput.value;
        const bookID = Date.now();
        this.addBook(titleValue, authorValue, bookID);
      }
    });
  }
}