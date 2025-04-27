/**
 * ========== JavaScript Inheritance Example ==========
 * This example demonstrates:
 * 1. Basic Constructor Function
 * 2. Prototype Methods
 * 3. Inheritance between classes
 * 4. Constructor function chaining
 */

// Parent Constructor
function Book(title, author, year) {
    // Instance properties
    this.title = title;
    this.author = author;
    this.year = year;

    // Log for learning
    console.log('📚 Creating new Book:', { title, author, year });
}

// Adding method to Parent prototype
Book.prototype.getSummary = function() {
    const summary = `${this.title} by ${this.author} (${this.year})`;
    console.log('📖 Getting book summary:', summary);
    return summary;
};

// Child Constructor
function Magazine(title, author, year, month) {
    // Call parent constructor (inheritance of properties)
    Book.call(this, title, author, year);

    this.month = month;
    console.log('📰 Adding magazine-specific property:', { month });
}

// Inherit prototype methods from Book
Magazine.prototype = Object.create(Book.prototype);

// Reset constructor to Magazine (best practice)
Magazine.prototype.constructor = Magazine;

// Add Magazine-specific method
Magazine.prototype.getIssueInfo = function() {
    const info = `Issue: ${this.month} ${this.year}`;
    console.log('🗓️ Getting magazine issue info:', info);
    return info;
};

// ========== Usage Example ==========
console.log('\n=== Creating Instances ===');
const book = new Book('JavaScript Basics', 'John Doe', 2024);
const magazine = new Magazine('JS Monthly', 'Jane Smith', 2024, 'March');

console.log('\n=== Testing Inheritance ===');
console.log('Book summary:', book.getSummary());
console.log('Magazine summary:', magazine.getSummary()); // Inherited method
console.log('Magazine issue:', magazine.getIssueInfo()); // Magazine-specific method

console.log('\n=== Instance Checking ===');
console.log('magazine instanceof Magazine:', magazine instanceof Magazine);
console.log('magazine instanceof Book:', magazine instanceof Book);