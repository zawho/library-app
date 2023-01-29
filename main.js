const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const pagesInput = document.querySelector('.pages-input');
const yesRead = document.querySelector('.yes-read');
const notRead = document.querySelector('.not-read');
const addBookButton = document.querySelector('.add-book');

// Main book storage array.
const theLibrary = [];

// Book constructor.
function Book() {
    this.title = '';
    this.author = '';
    this.pages = '';
    this.readStatus = '';
}

// Add book to library.
function addBook() {
    const userBook = new Book();
    userBook.title = titleInput.value;
    userBook.author = authorInput.value;
    userBook.pages = pagesInput.value;
    if (yesRead.checked) {
        userBook.readStatus = 'Read';
    } else if (notRead.checked) {
        userBook.readStatus = 'Not read';
    }
    theLibrary.push(userBook);
    console.log(theLibrary);
}

addBookButton.addEventListener('click', addBook);
