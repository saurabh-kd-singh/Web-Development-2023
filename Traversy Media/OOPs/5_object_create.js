// Object Of Protos
const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    },

    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

//Create Object
const book1 = Object.create(bookProtos);
book1.title = "Book One";
book1.author = "Saurabh";
book1.year = "2013";
console.log(book1);