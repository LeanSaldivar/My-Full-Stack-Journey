import {companies, ages} from "../high.js";

/**
 * forEach - Perform an action for each element in an array.
 *
 * - Does NOT return anything (undefined).
 * - Good for logging, side effects.
 * - Cannot chain .forEach because no new value is produced.
 */

//Normal for loop
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

//Enchanced for loop (for each)
companies.forEach(companies => {
    console.log(companies);
});

