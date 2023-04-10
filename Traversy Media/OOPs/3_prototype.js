// Constructor
function Book(title, author, year) {
    console.log("Book Initialized");
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
}

// getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

// Revise / Change Year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

// Instantiate an Object
const book1 = new Book("B1", "Saurabh", 2000);
const book2 = new Book("B2", "Shweta", 2002);

console.log(book1.title);
console.log(book1.getSummary());
console.log(book1.getAge());
console.log(book2.getAge());

book2.revise('2018');
console.log(book2.getAge());