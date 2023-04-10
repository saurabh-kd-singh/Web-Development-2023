// Constructor
function Book(title, author, year) {
    console.log("Book Initialized");
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
}

// Instantiate an Object
const book1 = new Book("B1", "Saurabh", 2000);
const book2 = new Book("B2", "Shweta", 2002);

console.log(book1.title);
console.log(book1.getSummary());