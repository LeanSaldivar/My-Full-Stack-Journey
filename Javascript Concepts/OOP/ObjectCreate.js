// ========== Utility Logger ==========
const logger = {
    info: (msg) => console.log(`ℹ️ ${msg}`),
    method: (name, result) => console.log(`📝 Method ${name}:`, result)
};

// ========== Object Prototype Definition ==========
/**
 * Base object that contains shared methods
 * These methods will be inherited by all instances
 */
const bookProtos = {
    /**
     * Returns a formatted summary of the book
     * @returns {string} Formatted book summary
     */
    getSummary: function() {
        const summary = `${this.title} by ${this.author} (${this.year})`;
        logger.method('getSummary', summary);
        return summary;
    },

    /**
     * Calculates the age of the book
     * @returns {string} Formatted age message
     */
    getAge: function() {
        const age = new Date().getFullYear() - this.year;
        logger.method('getAge', `${this.title} is ${age} years old`);
        return `${this.title} is ${age} years old`;
    }
};

// ========== Creating Objects ==========
logger.info('Creating new book instances...');

/**
 * Object.create() syntax:
 * First argument: prototype object to inherit from
 * Second argument: property descriptors object
 */
const book1 = Object.create(bookProtos, {
    title: { value: 'JavaScript Basics' },
    author: { value: 'John Doe' },
    year: { value: 2020 }
});

const book2 = Object.create(bookProtos, {
    title: { value: 'Advanced JS' },
    author: { value: 'Jane Smith' },
    year: { value: 2021 }
});

const collection = {
    books: [book1, book2]
};

// ========== Usage Demonstration ==========
logger.info('Demonstrating inherited methods:');

const displayInfo = (book) => {
    console.log('-----------------');
    console.log('Book Details:');
    console.log(book.getSummary());
    console.log(book.getAge());
    console.log('-----------------');
}

collection.books.forEach(book => {
    displayInfo(book);
});


// Verify prototype chain
logger.info('\nPrototype Chain Verification:');
console.log('book1 prototype:', Object.getPrototypeOf(book1) === bookProtos);
console.log('Shared methods:', Object.getPrototypeOf(book1));

/**
 * Key Learning Points:
 * 1. Object.create() creates a new object with the specified prototype
 * 2. Property descriptors allow fine-grained control over properties
 * 3. All instances share the same prototype methods (memory efficient)
 * 4. The prototype chain is established automatically
 */