//8a - 8d
const product = {
    product: 'basketball',
    price: 2095,
}

console.log('Displaying product');
console.log(product);

console.log(`Increasing price to 500: ${product.price + 500}`);

product['deliveryTime (days)'] = 3; //Reassigning
console.log(product);

const product1 ={
    product: 'basketball',
    price: 2095,
}

const product2 = {
    product: 'football',
    price: 3000,
}

function comparePrice(product1, product2) {
    if (product1.price < product2.price) {
        console.log(`${product1.product} costs less than ${product2.product}`);
    } else {
        console.log(`${product2.product} costs less than ${product1.product}`);
    }
}


//8e
function isSameProduct(product1, product2) {
    if (product1.price === product2.price) {
        console.log(`${product1.product} and ${product2.product} cost the same`);
    }
}

comparePrice(product1, product2);
isSameProduct(product1, product2);

//8f
const lowerCase = "Hello World".toLowerCase();

//8g
const repeat = "test".repeat(2);
