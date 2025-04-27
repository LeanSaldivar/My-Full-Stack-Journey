/**
 * Book Constructor Function - Creates book objects with basic properties
 * @constructor
 * @param {string} title - The title of the book
 * @param {string} author - The author of the book
 * @param {number} pages - Number of pages in the book
 * @param {number} year - Publication year
 */
function Book(title, author, pages, year) {
    // Instance properties - unique to each object
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;

    // Log instance creation for learning purposes
    console.log(`Creating new book: ${title}`);
}

// ========== Prototype Methods ==========
/**
 * These methods are shared across all instances
 * More memory efficient than defining methods in constructor
 */
// Returns formatted book summary
Book.prototype.getSummary = function() {
    return `Book Summary => Title: ${this.title}, Author: ${this.author}`;
};

// Calculates and returns book's age
Book.prototype.getAge = function() {
    const age = new Date().getFullYear() - this.year;
    console.log(`Calculating age for ${this.title}: ${age} years`);
    return age;
};

// ========== Creating and Using Instances ==========
// Create book instances
const book1 = new Book('JavaScript Basics', 'John Doe', 200, 2020);
const book2 = new Book('Advanced JS', 'Jane Smith', 300, 2021);

const collection = {
    books: [book1, book2]
};


// ========== Display Function ==========
// Helper function to display book information
const displayInfo = (book) => {
    console.log('-----------------');
    console.log('Book Details:');
    console.log(`Instance of Book: ${book instanceof Book}`)
    console.log(`Constructor: ${book.constructor.name}`)
    console.log(book.getSummary());
    console.log('Book Age:', book.getAge());
    console.log('-----------------');
};

collection.books.forEach(book => {
    displayInfo(book);
})

/**
 * Key Learning Points:
 * 1. Constructor function creates the object structure
 * 2. Prototype methods are shared across all instances
 * 3. 'this' refers to the current instance
 * 4. instanceof checks object inheritance
 * 5. All instances share the same prototype methods (memory efficient)
 */



