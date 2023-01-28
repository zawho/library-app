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

// User book variable;
let userBook = new Book();

// Add book to library.
function addBook() {
    theLibrary.push(userBook);
}

console.log(theLibrary);
