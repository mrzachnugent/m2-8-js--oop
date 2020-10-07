// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2.
// Paste them right here:
class Book {
  constructor(title, genre, author, isRead = false) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead;
  }
}

// const book1 = new Book("Harry Portter", "Fantasy", "J.K. Rollinindough");
// const book2 = new Book("Zach's adventure", "Semi-bio", "Zach Nugent", true);
// const book3 = new Book("Porter", "Action", "Will Smith", false);
// const book4 = new Book("King", "History", "Jack Black", true);
// const book5 = new Book("Brother", "Fantasy", "Daniel Day Lewis", false);

class BookList {
  constructor(books = [], lastRead = null, currentlyReading = null) {
    this.books = books;
    this.lastRead = lastRead;
    this.currentlyReading = currentlyReading;
  }
  // add = (book) => {
  //   this.books.push(book);
  // };
}

// Exercise 2.3
//
// We want to be able to add books to our BookList, so that we can start a
// collection!
//
// Let's create an `add` method in our BookList class. It should take a book
// as a parameter. When we call `.add`, it should push that new book into the
// `books` array on the `BookList` class. Also, if no Book is being currently read
// we should set currentlyReading to point to this newly added Book.
BookList.prototype.add = function (book) {
  this.books.push(book);
  if (this.currentlyReading === null) {
    this.currentlyReading = book;
  }
};
// Books have an `isRead` property, to indicate if we've read it or not.
// Let's also add two new methods:
// - getNumRead
// - getNumUnread
BookList.prototype.getNumRead = function () {
  let numRed = 0;
  this.books.forEach((book) => {
    if (book.isRead === true) {
      numRed += 1;
    }
  });
  return numRed;
};
BookList.prototype.getNumUnread = function () {
  let numUnread = 0;
  this.books.forEach((book) => {
    if (book.isRead === false) {
      numUnread += 1;
    }
  });
  return numUnread;
};
// These methods should return the number of books which are read and unread,
// respectively.
//
// The following code will fail by default. Your goal is to get it to run, and output the values specified at the end:

const homeLibrary = new BookList();

// Books are unread by default:
homeLibrary.add(new Book("The Shining", "Horror", "Stephen King"));
homeLibrary.add(new Book("American Gods", "Fiction", "Neil Gaiman"));

// But, we can specify that we've read it:
homeLibrary.add(
  new Book("Eloquent JavaScript", "Programming", "Marijn Haverbeke", true)
);

// At this point, we should have 2 unread books, and 1 read book:
// console.log(homeLibrary);

console.log(homeLibrary.getNumUnread()); // 2
console.log(homeLibrary.getNumRead()); // 1
console.log(homeLibrary.currentlyReading); // the Shining
