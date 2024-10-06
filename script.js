const myLibrary = []

function Book(title, author, pages, haveReadBook) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveReadBook = haveReadBook;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}