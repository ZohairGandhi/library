const myLibrary = [
  { title: "1984", author: "George Orwell", pages: "328", haveRead: true },
  { title: "Dune", author: "Frank Herbert", pages: "412", haveRead: false },
];

function Book(title, author, pages, haveReadBook) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveReadBook;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayLibrary() {
  for (let book of myLibrary) {
    const titleP = document.createElement("p");
    const authorP = document.createElement("p");
    const pagesP = document.createElement("p");
    const chBoxLabel = document.createElement("label");
    const chBox = document.createElement("input");

    chBoxLabel.setAttribute("for", "haveRead");
    chBox.setAttribute("type", "checkbox");
    chBox.setAttribute("name", "haveRead");
    chBox.setAttribute("id", "haveRead");

    titleP.textContent = book.title;
    authorP.textContent = book.author;
    pagesP.textContent = book.pages;
    chBoxLabel.textContent = "Read";
    chBox.checked = book.haveRead;

    chBoxLabel.appendChild(chBox);

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.append(titleP, authorP, pagesP, chBoxLabel);

    const cardsSec = document.querySelector(".cards-sec");
    cardsSec.appendChild(cardDiv);
  }
}

displayLibrary();
