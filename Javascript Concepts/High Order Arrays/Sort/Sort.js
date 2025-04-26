import {companies, ages} from "../high.js";

/**
 * sort - Rearrange the order of elements based on custom comparison.
 *
 * - Mutates (changes) the original array.
 * - Can sort alphabetically, numerically, custom logic.
 *
 * Example (numbers ascending):
 */

// const sortedCompanies = companies.sort(function (companiesA, companiesB) {
//     if (companiesA.start > companiesB.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// })


const sortedCompanies = companies.sort((a, b) => a.start - b.start);

console.log(sortedCompanies);

const sortAges = ages.sort((a, b) => b - a);

console.log(sortAges);