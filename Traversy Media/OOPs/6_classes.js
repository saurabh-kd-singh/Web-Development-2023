// const book1 = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: '2013',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in the year ${this.year}`;
//     }
// }

// // Constructor
// function Book(title, author, year) {
//     console.log("Book Initialized");
//     this.title = title;
//     this.author = author;
//     this.year = year;

//     this.getSummary = function() {
//         return `${this.title} was written by ${this.author} in the year ${this.year}`;
//     }
// }


class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }
}

// Instantiate Object
const Book1 = new Book("B1", "Saurabh", "2013");
console.log(Book1);
Book1.revise("2014");
console.log(Book1.getAge());