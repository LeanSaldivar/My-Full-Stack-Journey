//2a
const soup = 10;
const burger = 8;
const iceCream = 5;

const order = ((soup) + (burger * 3) + (iceCream));
console.log(order);

//2b
const numberOfFriends = 3;
console.log(order * numberOfFriends);

//2c
const toaster = 18.50;
const shirt = 7.50;

const Cost = toaster + (shirt * 2);

console.log(Cost);

//2d

const tax = 10/100;
console.log(Cost * tax);

//2e
const tax2 = 20/100;
console.log(Cost * tax2);

//2f - 2i
const totalItems = 47.93;
const Shipping = 4.99;

const totalBeforeTax = (totalItems + Shipping);
const estimatedTax =  Math.round(totalBeforeTax * tax);
const orderTotal = (totalBeforeTax + estimatedTax);

console.log("Order Summary");
console.log("Items (3): $" + totalItems.toFixed(2));
console.log("Shipping & Handling: $" + Shipping.toFixed(2));
console.log("Total Before Tax: $" + totalBeforeTax.toFixed(2));
console.log("Estimated tax (10%): $" + estimatedTax.toFixed(2));
console.log("Order total: $" + orderTotal.toFixed(2));

//2j
const roundDown = Math.floor(2.8);
console.log(roundDown);

//2k
const roundUp = Math.ceil(2.2);
console.log(roundUp);

//2l - 2n
const temp1 = 25; //Convert to F
const temp2 = 86; //Convert to C
const temp3 = -5; //Convert to F

console.log((temp1 * 9/5) + 32 + " F");
console.log((temp2 - 32) * 5/9 + " C");
console.log((temp3 * 9/5) + 32 + " F");
