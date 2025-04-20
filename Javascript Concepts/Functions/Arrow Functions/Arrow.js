function basic (a, b){
    return a + b;
}

//Arrow Function
const add = (a, b) => {
    return a + b;
}

//Implicit Return
const subtract = (a, b) => a - b;

//for 1 parameters
const double = a => a * 2;

//returning an object
const createObj = () => ({
    name: 'Brad'
});

//Array
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => console.log(number));

//or

numbers.forEach(number => {
    console.log(number);
});

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(double(10));