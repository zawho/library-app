function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

Book.prototype.info = function getBookInfo() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`;
}
const nightwood = new Book('Nightwood', 'Djuna Barnes', '180', 'Have read');

console.log(nightwood.info());