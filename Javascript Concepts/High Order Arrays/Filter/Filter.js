import {companies, ages} from "../high.js";

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