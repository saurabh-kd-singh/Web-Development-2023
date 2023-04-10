// const s1 = "hello";

// const s2 = new String('hello');

// console.log(s1==s2);
// console.log(s1===s2);

// console.log(navigator.appVersion);

const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
}

const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2016',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
}

console.log(book1.title);
console.log(book1.getSummary());