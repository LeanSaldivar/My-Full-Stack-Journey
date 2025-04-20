// Objects = A collection of related properties and/or methods
// Used to model real-world entities like people, products, or places

console.log("===== Traditional Object Declaration =====");

// Object with nested object + methods
const person = {
    firstName: "Lean Emmanuel",
    lastName: "Saldivar",
    age: 19,
    isEmployed: false,

    // Method using 'this' to reference properties of the same object
    sayHello: function () {
        console.log("Hello! My name is " + this.firstName + " " + this.lastName);
    },

    // Nested object inside 'person'
    whoami: {
        firstName: "Lean Emmanuel",
        lastName: "Saldivar",
        age: 19,

        // Custom string formatter for the nested object
        toString: function () {
            return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
        }
    }
};

// Log the full object
console.log("Full person object:", person);

// Update property using bracket notation (can also use dot notation)
person['firstName'] = 'Rohann';
console.log("Updated firstName:", person.firstName);

// Call object's method
person.sayHello();

// Call nested object's method
console.log("Who am I (custom toString):", person.whoami.toString());

console.log("\n===== Object Literal Shorthand & Computed Values =====");

// Shorthand property assignment (same key and variable name)
const animal = 'spider';
const legs = 8;

// Function that generates a random DNA-like string
const DNA = () => Math.random().toString(36).slice(-5).toUpperCase();

const species = {
    animal, // same as animal: animal

    // Will be overwritten if repeated (example of override in object literals)
    food: '',

    legs: 32, // this will overwrite the earlier 'legs' = 8

    dna: DNA(), // Direct function call assigns string value

    // Getter method to modify state and return 'this'
    get eat() {
        this.food += 'insects';
        return this;
    },

    // Custom formatter method
    toString: function () {
        return `Species: ${this.animal}, Legs: ${this.legs}, DNA: ${this.dna}`;
    }
};

// Log the full species object
console.log("Species object:", species);
console.log("Species description (custom toString):", species.toString());

// Demonstrate that calling eat getter mutates internal state
species.eat; // appends 'insects' to food
console.log("After calling eat():", species.food); // should show 'insects'

console.log("\n===== Object Destructuring =====");

// Destructuring object to extract properties into new variables
const { animal: mySpider, legs: numOfLegs } = species;

console.log(`Destructured animal: ${mySpider}, Legs: ${numOfLegs}`);

console.log("\n===== Object Constructor + Inheritance =====");

// Creating an object using the built-in Object constructor
const obj = new Object({});
obj.rabbit = 'rabbit';
obj.elephant = 'elephant';

console.log("Object created via constructor:", obj);

// Create a new object that inherits from 'person'
const you = Object.create(person); // now 'you' inherits all properties/methods from 'person'

// Inherited property from prototype
console.log("Inherited 'firstName' from person:", you.firstName);

// Accessing the prototype's nested object and method
console.log("Prototype of 'you':", Object.getPrototypeOf(you).whoami.toString());

console.log("\n===== defineProperty: Overriding 'firstName' with Getter =====");

// Overriding inherited 'firstName' with a custom getter
Object.defineProperty(you, 'firstName', {
    get: () => 'Josiah',       // custom name override
    enumerable: false          // this key won’t show up during enumeration (e.g., for...in loops)
});

console.log("Overridden 'firstName' using defineProperty:", you.firstName);

// Confirm that 'firstName' is now a local property of 'you', not inherited
console.log("Is 'firstName' own property of 'you'?", you.hasOwnProperty('firstName'));
