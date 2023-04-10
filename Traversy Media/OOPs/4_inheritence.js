// Constructor
function Book(title, author, year) {
    console.log("Book Initialized");
    this.title = title;
    this.author = author;
    this.year = year;
};

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
};

// magazine Contructor
function Magazine(title, author, year, month) {
    console.log("magazine Intialized");
    Book.call(this, title, author, year);
    this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('mag One', 'John Doe', '2018', 'Jan');

// Use magazine Contructor
Magazine.prototype.constructor = Magazine;


console.log(mag1);
console.log(mag1);
