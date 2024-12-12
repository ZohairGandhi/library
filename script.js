const myLibrary = [
  { title: "1984", author: "George Orwell", pages: "328", haveRead: true },
  { title: "Dune", author: "Frank Herbert", pages: "412", haveRead: false },
];

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const cardsSec = document.querySelector(".cards-sec");

const newBtn = document.createElement("button");
newBtn.setAttribute("id", "new-btn");
const newBtnP = document.createElement("p");
newBtnP.textContent = "New Book";
newBtn.appendChild(newBtnP);

function displayLibrary() {
  cardsSec.appendChild(newBtn);
  
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

    cardsSec.appendChild(cardDiv);
  }
}

displayLibrary();

const modal = document.querySelector("dialog");
const form = document.querySelector("form");

newBtn.addEventListener("click", () => {
  form.reset();
  modal.showModal();
});

// const closeBtn = document.querySelector(".form-btns button:nth-child(2)");

// closeBtn.addEventListener("click", () => {
//   modal.close();
// });

const addBtn = document.querySelector("form button");

addBtn.addEventListener("click", () => {
  const title = document.querySelector("#form-title").value;
  const author = document.querySelector("#form-author").value;
  const pages = document.querySelector("#form-pages").value;
  const haveRead = document.querySelector("#form-haveRead");

  addBookToLibrary(new Book(title, author, pages, haveRead.checked));

  cardsSec.innerHTML = "";

  displayLibrary();
});
