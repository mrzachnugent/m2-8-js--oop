// From 2.3
// Copy over all of the code from 2.3...
class Book {
  constructor(title, genre, author, isRead = false) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead;
  }
}

class BookList {
  constructor(books = [], lastRead = null, currentlyReading = null) {
    this.books = books;
    this.lastRead = lastRead;
    this.currentlyReading = currentlyReading;
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
}

// Exercise 2.4
/*

In our BookList, we have properties to track:
- The last book we've read
- The book we're currently reading
- The next book up

We're not using these properties yet; they're always null.

Our new task is to make them functional. When we add our first book to the
list, `currentlyReading` should get set to it.

We need two new methods:

- startReading
- finishReading

Both of these methods will take a book title, as a string.

When we start reading a book, we should set the `currentlyReading` property
to point to it.*/

BookList.prototype.startReading = function (title = null) {
  this.currentlyReading = title;
};
BookList.prototype.finishReading = function (title = null) {
  this.currentlyReading = null;
  this.lastRead = title;
};

// When we finish reading a book, we should set `currentlyReading` back to `null`,
// and set `lastRead` to the book we just finished.

// Your goal is to add the methods and behaviour necessary so that the following
// code runs well and produces the expected output.

const homeLibrary = new BookList();

homeLibrary.add(new Book("The Shining", "Horror", "Stephen King"));
homeLibrary.add(new Book("American Gods", "Fiction", "Neil Gaiman"));
homeLibrary.add(
  new Book("Eloquent JavaScript", "Programming", "Marijn Haverbeke", true)
);
homeLibrary.add(new Book("The Eire Affair", "Fantasy", "Jasper Fforde"));
homeLibrary.add(
  new Book("The Revisionists", "Science-fiction", "thomas Mullen")
);

console.log("initial state", homeLibrary.currentlyReading); // should be The Shining book object
console.log("initial last-read", homeLibrary.lastRead); // should be null

homeLibrary.finishReading("The Shining");
console.log(
  "Currently reading, after finishing The Shining",
  homeLibrary.currentlyReading
); // should be null
console.log("Last-read, after finishing The Shining", homeLibrary.lastRead); // should be The Shining

homeLibrary.startReading("The Revisionists");
console.log(
  "Currentky reading, After starting The Revisionists",
  homeLibrary.currentlyReading
); // should be The Revisionists book
