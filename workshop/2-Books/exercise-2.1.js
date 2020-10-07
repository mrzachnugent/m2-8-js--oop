// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
  constructor(title, genre, author, isRead = false) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead;
  }
}

const book1 = new Book("Harry Portter", "Fantasy", "J.K. Rollinindough");
const book2 = new Book("Zach's adventure", "Semi-bio", "Zach Nugent", true);
const book3 = new Book("Porter", "Action", "Will Smith", false);
const book4 = new Book("King", "History", "Jack Black", true);
const book5 = new Book("Brother", "Fantasy", "Daniel Day Lewis", false);

console.log(book1, book2, book3, book4, book5);

// Book {
//     title: 'Harry Portter',
//     genre: 'Fantasy',
//     author: 'J.K. Rollinindough',
//     isRead: false
//   } Book {
//     title: "Zach's adventure",
//     genre: 'Semi-bio',
//     author: 'Zach Nugent',
//     isRead: true
//   } Book {
//     title: 'Porter',
//     genre: 'Action',
//     author: 'Will Smith',
//     isRead: false
//   } Book {
//     title: 'King',
//     genre: 'History',
//     author: 'Jack Black',
//     isRead: true
//   } Book {
//     title: 'Brother',
//     genre: 'Fantasy',
//     author: 'Daniel Day Lewis',
//     isRead: false
//   }
