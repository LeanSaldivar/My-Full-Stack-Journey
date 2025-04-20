//Create Element
let div  = document.createElement('div'); //Creates div
div.innerHTML = "<p>Hello World!</p>"; //Adding p inside the div variable
div.id = "title"; //adding a title inside the div
div.className ="container"; //adding a class inside the div

document.body.appendChild(div);

console.log(div);

//appendChild()
//Adding a node to the end of the list of child nodes
//Can be used to move an existing child node to the new position wihtin the document
let menu = document.querySelector("#menu"); //Menu being a parent
let list = document.createElement("li"); //Adding li tag inside the parent

list.innerHTML = "Contacts"; //Adding value inside the li tag
menu.appendChild(list); //Adding it to the html

console.log(list);

//textContent()
