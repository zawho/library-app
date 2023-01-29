const newBookButton = document.querySelector('.new-button');
document.querySelector('.book-form').style.display = 'none';
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const pagesInput = document.querySelector('.pages-input');
const yesRead = document.querySelector('.yes-read');
const addBookButton = document.querySelector('.add-book');
const userLibrary = document.querySelector('.user-library');

// Main book storage array.
const theLibrary = [];

// Book constructor.
function Book() {
    this.title = '';
    this.author = '';
    this.pages = '';
    this.readStatus = '';
}

// New book button displays form.
function createBook() {
    document.querySelector('.book-form').reset();
    document.querySelector('.book-form').style.display = 'inline-flex';
    document.querySelector('.book-form').style.flexDirection = 'column';
}

// Loop through array and display books.
function displayBook() {
    const bookCard = document.createElement('div');
    const cardTitle = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const cardPages = document.createElement('div');
    const cardReadStatus = document.createElement('div');
    bookCard.classList.add('book-card');
    for (let i = 0; i < theLibrary.length; i++) {
            cardTitle.innerText = theLibrary[theLibrary.length - 1].title;
            cardAuthor.innerText = theLibrary[theLibrary.length - 1].author;
            cardPages.innerText = theLibrary[theLibrary.length - 1].pages;
            cardReadStatus.innerText = theLibrary[theLibrary.length - 1].readStatus;
            userLibrary.appendChild(bookCard);
            bookCard.appendChild(cardTitle);
            bookCard.appendChild(cardAuthor);
            bookCard.appendChild(cardPages);
            bookCard.appendChild(cardReadStatus);
    }
}

// Add book to library.
function addBook(e) {
    const userBook = new Book();
    document.querySelector('.book-form').style.display = 'none';
    userBook.title = titleInput.value;
    userBook.author = authorInput.value;
    userBook.pages = pagesInput.value;
    if (yesRead.checked) {
        userBook.readStatus = 'Finished';
    } else {
        userBook.readStatus = 'Unfinished';
    }
    theLibrary.push(userBook);
    e.preventDefault();
    displayBook();
}

newBookButton.addEventListener('click', createBook);
addBookButton.addEventListener('click', addBook);
