const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const pagesInput = document.querySelector('.pages-input');
// const yesRead = document.querySelector('.yes-read');
// const notRead = document.querySelector('.not-read');
const addBookButton = document.querySelector('.add-book');

// Main book storage array.
let theLibrary = [];

// Book constructor.
function Book() {
    this.title = '';
    this.author = '';
    this.pages = '';
    // this.readStatus = readStatus;
}

// User book variable.
let userBook = new Book();

userBook.prototype = Object.create(Book.prototype);

// Add book to library.
function addBook() {
    userBook.title = titleInput.value;
    theLibrary.push(userBook);
    console.log(theLibrary);
}

addBookButton.addEventListener('click', addBook);
