//3a
const text = "My name is: "

//3b
const name = "Lean"

//3c
console.log(text + name);

//3d
const coffee = 5;
const bagel = 3;
const total = (coffee + bagel).toFixed(2);

console.log("Total cost: " + total + "$");

//3e
console.log(`Total cost: ${total}$`);

//3f
alert(`Total cost: ${total}$`);

//3g
const coffee2 = 5.99;
const bagel2 = 2.95;
const total2 = (coffee2 + bagel2).toFixed(2);

console.log("Total cost: $" + total2);

//3h
console.log(`Total cost: $${total2}$`);

//3i
alert(`Total cost: $${total2}`);

//3j
alert(
`Total cost: $${total2}
Thank you, come again!`
);

//3k - n
const basketballs = 20.95;
const shirt = 7.99
const shipping = 9.98;
const tax = 10/100;

const total3 = ((basketballs * 2) + (shirt  *2 ));
const totalBeforeTax = (total3 + shipping);
const estimatedTax = Math.round(totalBeforeTax * tax);
const orderTotal = (totalBeforeTax + estimatedTax);
console.log
(
`Items(4): ${total3.toFixed(2)}
Shipping & handling: ${shipping.toFixed(2)}
Total before tax: ${totalBeforeTax.toFixed(2)}
Estimated tax(10%): ${estimatedTax.toFixed(2)}
Order total: ${orderTotal.toFixed(2)}`
);




