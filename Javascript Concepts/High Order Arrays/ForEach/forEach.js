import {companies, ages} from "../high.js";

//Normal for loop
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

//Enchanced for loop (for each)
companies.forEach(companies => {
    console.log(companies);
})