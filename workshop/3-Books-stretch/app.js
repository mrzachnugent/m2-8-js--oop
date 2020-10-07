//CLASSES
class Book {
  constructor(title, genre, author, picture = null, isRead = false) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.picture = picture;
    this.isRead = isRead;
  }
}

class BookList {
  constructor(
    books = [],
    lastRead = null,
    currentlyReading = null,
    lastReadDate = null
  ) {
    this.books = books;
    this.lastRead = lastRead;
    this.currentlyReading = currentlyReading;
    this.lastReadDate = lastReadDate;
  }
  add = (book) => {
    this.books.push(book);
    if (this.currentlyReading === null) {
      this.currentlyReading = book;
    }
  };
  getNumRead = () => {
    let numRed = 0;
    this.books.forEach((book) => {
      if (book.isRead === true) {
        numRed += 1;
      }
    });
    return numRed;
  };
  getNumUnread = () => {
    let numUnread = 0;
    this.books.forEach((book) => {
      if (book.isRead === false) {
        numUnread += 1;
      }
    });
    return numUnread;
  };
  startReading = (title = null) => {
    this.currentlyReading = title;
  };
  finishReading = (title = null) => {
    this.currentlyReading = null;
    this.lastRead = title;
    this.lastReadDate = new Date();
  };
}

//Create new instance of BookList
const homeLibrary = new BookList();

//Adding books to the homeLibrary
homeLibrary.add(
  new Book(
    "The DaVinci Code",
    "Mystery",
    "Dan Brown",
    "assets/the-da-vinci-code.jpg"
  )
);
homeLibrary.add(
  new Book(
    "Harry Potter",
    "Fantasy",
    "J.K. Rollingindough",
    "assets/harry-potter.jpg"
  )
);
homeLibrary.add(
  new Book("50 Shades of Grey", "Adult", "E.L. James", "assets/50-shades.jpg")
);

//Using the methods from homeLibrary

homeLibrary.finishReading("Harry Potter");
homeLibrary.startReading("The DaVinci Code");

//DOM
//Target elements
const main = document.getElementsByTagName("main")[0];
const currReadBookTitle = document.getElementById("curr-read");
const lastReadBookTitle = document.getElementById("last-read");

//Target books array from homeLibrary
const listOfBooks = homeLibrary.books;

listOfBooks.forEach((book) => {
  let card = document.createElement("div");
  card.classList.add("cards");
  main.appendChild(card);
  let titleBox = document.createElement("div");
  titleBox.classList.add("title-box");
  card.appendChild(titleBox);
  let bookTitle = document.createElement("p");
  bookTitle.classList.add("book-title");
  bookTitle.innerText = book.title;
  titleBox.appendChild(bookTitle);
  let bookImgContainer = document.createElement("div");
  bookImgContainer.classList.add("book-img-container");
  card.appendChild(bookImgContainer);
  let bookCover = document.createElement("img");
  bookCover.classList.add("book-img");
  bookCover.src = book.picture;
  bookImgContainer.appendChild(bookCover);
});

currReadBookTitle.innerText = homeLibrary.currentlyReading;
lastReadBookTitle.innerText = `${homeLibrary.lastRead} on ${homeLibrary.lastReadDate}`;
