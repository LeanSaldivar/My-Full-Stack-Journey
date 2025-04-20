//Simple Function
function sayHello(){
    console.log('Hello World');
}

sayHello();

//Passing in parameters
function add(num1, num2) {
    return (num1 + num2);

    //Won't execute after the return function
    console.log('After the return');
}

add(5, 10); // Won't result into anything

const result = add(5, 10);

console.log(result)
