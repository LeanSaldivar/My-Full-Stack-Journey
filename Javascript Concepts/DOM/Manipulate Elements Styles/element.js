let header = document.querySelector('.header');

//Will display the inline css style
console.log(header.style);

//Style property

//Adding flex property
let content = document.querySelector('.container');
content.style.display = "flex";
console.log(content.style);

//css text
let heading = document.querySelector('.heading');
//Overrides inline css text unless using the += operator
heading.style.cssText = "display: flex";

//getComputedStyle()
console.log(window.getComputedStyle(header, null).fontSize)
