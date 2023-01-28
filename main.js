const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const pagesInput = document.querySelector('.pages-input');
const yesRead = document.querySelector('.yes-read');
const notRead = document.querySelector('.not-read');
const addBookButton = document.querySelector('.add-book');

// Main book storage array.
let theLibrary = [];

// Book constructor.
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

// Example book instance.
Book.prototype.info = function getBookInfo() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`;
}

const nightwood = new Book('Nightwood', 'Djuna Barnes', '180', 'Have read');

// Add book to library.
function addBook() {
    theLibrary.push(Book);
}

addBook();
console.log(theLibrary);
