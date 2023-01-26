function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = function getBookInfo() {
        return `${title} by ${author}, ${pages} pages, ${readStatus}`;
    }
}

const nightwood = new Book('Nightwood', 'Djuna Barnes', '180', 'Have read');

console.log(nightwood.info());