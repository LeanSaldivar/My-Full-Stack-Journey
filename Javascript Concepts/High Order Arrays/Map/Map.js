import {companies, ages} from "../high.js";

/**
 * map - Create a new array by transforming every element.
 *
 * - Always returns a new array.
 * - Same number of elements as the original array.
 *
 * Example:
 */

const companyNames = companies.map(function (companies, index) {
    return `${companies.name} [${companies.start} - ${companies.end}]`; //Will print out values inside the return value
})

const companyArrow = companies.map((companies, index) => {
    return `${companies.name} [${companies.start} - ${companies.end}]`; //Will print out values inside the return value
})

const ageSquare = ages
    .map(age => Math.sqrt(age))         // Get sqrt as a number
    .map(root => (root * 2).toFixed(2)); // Multiply then format



/*
 *
 */

console.log(ageSquare)
console.log(companyArrow);