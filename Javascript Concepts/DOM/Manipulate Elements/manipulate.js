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
console.table(menu.textContent) //Prints the text of the targeted element
console.log(menu.innerText); //Will return only visible text

//Removes list and replaces with Hello

// menu.textContent = "Hello World!";

//innerHTML
//Accepts html tags as opposed to textContent()
// menu.innerHTML = "<h1>Hello World!</h1>";

//After()

menu.after('HELLO', "HELLO");

//Append()

/*
parentNode.append(newNodes);

 - Accepts multiple nodes
 - Can add string
 */

//insertAdjacentTML
let manipulate = document.querySelector("#manipulate");

//adds Item 3 at the end of the list
manipulate.insertAdjacentHTML("beforeend", "<li>Before End</li>");

//Begins outside of the child nodes
manipulate.insertAdjacentHTML("beforebegin", "<li>Before Begin</li>");

//Adds Item 3 at the beginning of the list
manipulate.insertAdjacentHTML("afterbegin", "<li>After Begin</li>");

//Adds item outside the end of the list
manipulate.insertAdjacentHTML("afterend", "<li>After Begin</li>");

//Replace Child()
//Used to replace the child element with a new one

/*
parentNode.replaceChild(newChild, oldChild)
 */

//Clone Node

//Prints the entire child element if set to true, otherwise its set to false by default
let newNode = manipulate.cloneNode(true);
console.log(newNode);

//removeChild()

let asia = document.querySelector("#asia");

//Removes the oldest Child
asia.removeChild(asia.lastElementChild);

//Removes the youngest Child
asia.removeChild(asia.firstElementChild);

//As always the middle child is ignored

//InsertBefore();
//Used to insert a new node before an existing node as a child node of a parent node

/*
parentNode.insertBefore(newNode, existingNode);
\
 */

let before = document.querySelector("#before");

before.insertBefore(newNode, menu .firstElementChild);