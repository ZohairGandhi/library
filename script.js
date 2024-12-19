class Book {
  constructor(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
  }
}

class Library {
  constructor() {
    this.myLibrary = [
      new Book("1984", "George Orwell", 328, true),
      new Book("Dune", "Frank Herbert", 412, false),
    ];
  }

  addBookToLibrary(book) {
    this.myLibrary.push(book);
  }

  displayLibrary() {
    cardsSec.appendChild(newBtn);
    let index = 0;

    for (let book of this.myLibrary) {
      const titleP = document.createElement("p");
      const authorP = document.createElement("p");
      const pagesP = document.createElement("p");
      const chBoxLabel = document.createElement("label");
      const chBox = document.createElement("input");
      const removeBtn = document.createElement("button");

      chBoxLabel.setAttribute("for", "haveRead");
      chBox.setAttribute("type", "checkbox");
      chBox.setAttribute("name", "haveRead");
      chBox.setAttribute("id", "haveRead");
      chBox.setAttribute("data-index", index);
      removeBtn.setAttribute("data-index", index);

      titleP.textContent = book.title;
      authorP.textContent = book.author;
      pagesP.textContent = book.pages;
      chBoxLabel.textContent = "Read";
      chBox.checked = book.haveRead;
      removeBtn.textContent = "Remove";

      chBox.addEventListener("change", (event) => {
        const changeIdx = event.target.dataset.index;
        this.myLibrary.at(changeIdx).haveRead = event.target.checked;
      });

      removeBtn.addEventListener("click", (event) => {
        const removeIdx = event.target.dataset.index;
        this.myLibrary.splice(removeIdx, 1);
        cardsSec.innerHTML = "";
        lib.displayLibrary();
      });

      chBoxLabel.appendChild(chBox);

      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
      cardDiv.append(titleP, authorP, pagesP, chBoxLabel, removeBtn);

      cardsSec.appendChild(cardDiv);

      index++;
    }
  }
}

const lib = new Library();

const cardsSec = document.querySelector(".cards-sec");

const newBtn = document.createElement("button");
newBtn.setAttribute("id", "new-btn");
const newBtnP = document.createElement("p");
newBtnP.textContent = "New Book";
newBtn.appendChild(newBtnP);

lib.displayLibrary();

const modal = document.querySelector("dialog");
const form = document.querySelector("form");

newBtn.addEventListener("click", () => {
  form.reset();
  modal.showModal();
});

const addBtn = document.querySelector("form button");

addBtn.addEventListener("click", () => {
  const title = document.querySelector("#form-title").value;
  const author = document.querySelector("#form-author").value;
  const pages = document.querySelector("#form-pages").value;
  const haveRead = document.querySelector("#form-haveRead");

  lib.addBookToLibrary(new Book(title, author, pages, haveRead.checked));

  cardsSec.innerHTML = "";

  lib.displayLibrary();
});
