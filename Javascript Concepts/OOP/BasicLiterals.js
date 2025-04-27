/**
 * Advanced JavaScript Object Demonstrations
 * This file showcases various object-related concepts in JavaScript including:
 * - Object literals and methods
 * - Nested objects
 * - Property access and modification
 * - Object destructuring
 * - Inheritance and prototypes
 * - Property descriptors
 */

// Set up logging utility for better debugging
const logger = {
    section: (title) => console.log(`\n===== ${title} =====`),
    info: (msg, data) => console.log(`INFO: ${msg}`, data || ''),
    debug: (msg, data) => console.log(`DEBUG: ${msg}`, data || '')
};

logger.section('Traditional Object Declaration');

// Define a person object with basic properties and nested structure
const person = {
    firstName: "Lean Emmanuel",
    lastName: "Saldivar",
    age: 19,
    isEmployed: false,

    /**
     * Demonstrates method using 'this' context
     * @returns {void}
     */
    sayHello: function() {
        logger.info(`Hello! My name is ${this.firstName} ${this.lastName}`);
    },

    // Nested object demonstrating object composition
    whoami: {
        firstName: "Lean Emmanuel",
        lastName: "Saldivar",
        age: 19,

        /**
         * Custom string representation of the nested object
         * @returns {string} Formatted string with object properties
         */
        toString: function() {
            return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
        }
    }
};

// Demonstrate object manipulation and method calls
logger.debug("Initial person object", person);

// Show different ways to access/modify properties
person['firstName'] = 'Rohann';  // Bracket notation
logger.debug("Updated firstName", person.firstName);  // Dot notation

person.sayHello();
logger.debug("Nested object toString()", person.whoami.toString());

logger.section('Object Literal Shorthand & Computed Values');

// Demonstrate modern object creation features
const animal = 'spider';
const legs = 8;

/**
 * Generates a random DNA-like string for demonstration
 * @returns {string} 5-character uppercase string
 */
const DNA = () => Math.random().toString(36).slice(-5).toUpperCase();

// Object using modern JavaScript features
const species = {
    animal,  // Property shorthand
    food: '', // Will be modified by getter

    // Property that overrides external variable
    legs: 32,

    // Computed property
    dna: DNA(),

    /**
     * Getter that modifies internal state
     * @returns {object} Returns this for chaining
     */
    get eat() {
        this.food += 'insects';
        return this;
    },

    toString: function() {
        return `Species: ${this.animal}, Legs: ${this.legs}, DNA: ${this.dna}`;
    }
};

logger.debug("Species object", species);
logger.debug("Species toString()", species.toString());

// Demonstrate state mutation through getter
species.eat;
logger.debug("After calling eat getter", species.food);

logger.section('Object Destructuring');

// Example of object destructuring with property renaming
const { animal: mySpider, legs: numOfLegs } = species;
logger.debug("Destructured values", `animal: ${mySpider}, legs: ${numOfLegs}`);

logger.section('Object Constructor + Inheritance');

// Demonstrate different object creation patterns
const obj = new Object({});
obj.rabbit = 'rabbit';
obj.elephant = 'elephant';
logger.debug("Constructor-created object", obj);

// Inheritance through Object.create()
const you = Object.create(person);
logger.debug("Inherited firstName", you.firstName);
logger.debug("Inherited nested object", Object.getPrototypeOf(you).whoami.toString());

logger.section('defineProperty: Overriding firstName with Getter');

// Advanced property configuration using defineProperty
Object.defineProperty(you, 'firstName', {
    get: () => 'Josiah',
    enumerable: false
});

logger.debug("Property after defineProperty", you.firstName);
logger.debug("Is firstName own property?", you.hasOwnProperty('firstName'));