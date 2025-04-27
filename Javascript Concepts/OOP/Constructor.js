// ========== Constructor Function Learning Notes ==========
/**
 * Constructor Functions:
 * - Always start with a capital letter (convention)
 * - Used as a template for creating objects
 * - 'this' keyword refers to the current instance being created
 * - Called with 'new' keyword which:
 *   1. Creates an empty object
 *   2. Sets 'this' to point to that object
 *   3. Links object to constructor's prototype
 *   4. Returns the object automatically
 */

// Constructor function definition
function Book(title, author, pages, year) {
    // Property initialization using 'this'
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;

    // Method added to each instance
    // Note: Better to use prototype for methods to save memory
    this.getSummary = function() {
        return `
        Title: ${this.title}, 
        Author: ${this.author}, 
        Pages: ${this.pages}, 
        Year: ${this.year}`;
    };
}

// ========== Creating Instances ==========
console.log('Creating new book instances...');
const book1 = new Book('The Hobbit', 'Lean', 354, 1937);
const book2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 510, 1954);
const book3 = new Book('The Hitchhiker\'s Guide to the Galaxy', 'J.R.R. Tolkien', 409, 1979);

// Demonstrate instance checking
console.log('Instance checking:');
console.log('book1 instanceof Book:', book1 instanceof Book);
console.log('book1 constructor:', book1.constructor.name);

// ========== Collection Management ==========
// Creating a collection object to store books
const collection = {
    books: [book1, book2, book3]
};

// ========== Display Function ==========
// Helper function to display book information
const displayInfo = (book) => {
    console.log('Book Details:');
    console.log(book.getSummary());
    console.log('-----------------');
};

// ========== Sorting Operations ==========
console.log('\nSorting books by year:');
const sortBookByYear = collection.books.sort((a, b) => a.year - b.year);
sortBookByYear.forEach(displayInfo);

console.log('\nSorting books by pages:');
const sortBookByPages = collection.books.sort((a, b) => a.pages - b.pages);
sortBookByPages.forEach(displayInfo);

// ========== Constructor Property Demonstration ==========
console.log('\nConstructor Properties Demo:');
console.log('Book constructor:', Book.prototype);
console.log('book1 properties:', Object.keys(book1));

// ========== Additional Learning Notes ==========
/**
 * Key Points About Constructors:
 * 1. Constructor functions are regular functions that are used to set up new objects
 * 2. The 'new' operator creates a new object and sets 'this' within the constructor
 * 3. Each instance gets its own copy of properties defined with 'this'
 * 4. Methods defined inside constructor create copies for each instance
 *    (Consider moving to prototype for better memory efficiency)
 * 5. Constructor functions help create consistent object structures
 */

// Example of checking object structure
console.log('\nObject Structure Demo:');
for (let prop in book1) {
    console.log(`Property: ${prop}, Value: ${book1[prop]}`);
}