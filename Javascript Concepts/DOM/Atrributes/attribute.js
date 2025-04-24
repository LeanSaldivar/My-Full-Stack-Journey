//Attribute methods

let form = document.querySelector("#username");

//Prints all attributes in an element
console.log(form.attributes);

//getAttribute()
//Gets a specific attribute
console.log(form.getAttribute("type"));

//setAttribute()
//Changes the attribute of type
form.setAttribute("type", "number")
//Prints the new attribute
console.log(form.getAttribute("type"));

//hasAttribute()
//returns true or false if an element has that attribute
console.log(form.hasAttribute("class"));//will display false

//removeAttribute()
//Removes well, an attribute
form.removeAttribute("placeholder");
console.log(form.hasAttribute("placeholder"));//will display false
