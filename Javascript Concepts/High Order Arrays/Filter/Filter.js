import {companies, ages} from "../high.js";

/**
 * filter - Create a new array only with elements that pass a test.
 *
 * - Always returns a new array.
 * - Original array remains unchanged.
 *
 * Example:
 */

let drinks = [];

// //Normal For loop
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 21) {
//         drinks.push(ages[i]);
//     }
// }

// console.log(drinks);

//Filter

// const canDrink = ages.filter(age => {
//     if(age >= 21) {
//         return true;
//     }
// })

//get 21 and older
const canDrinks = ages.filter(age => age >= 21);

console.log(canDrinks);

//Filter retail companies
const retail = companies.filter(companies => companies.category === "Retail");

console.log(retail);

//Get 80's company
const year = companies.filter(companies => (companies.start >= 1980 && companies.start <= 1989));

console.log(year);

//Companies that lasted 10 years
const tenYearss = companies.filter(company => ((company.end - company.start) >= 10))

console.log("Ten years");
console.log(tenYearss);