import {companies, ages} from "../high.js";

/**
 * reduce - Collapse array elements into a single final value.
 *
 * - Returns ANY type: number, array, object, etc.
 * - Takes an accumulator and updates it each time.
 *
 * Example (sum):
 */

let ageSum = 0;

// for (let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }

// ageSum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0)

const num = []

ageSum = num.reduce((a, b) => a + b, 0)

console.log(ageSum);