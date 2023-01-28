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
