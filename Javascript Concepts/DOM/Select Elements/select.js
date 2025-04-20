// ------------------ Selecting by ID ------------------
// Takes the ID out of the <p> tag in HTML
let msg = document.getElementById('message');
console.log("ID Selector Output:");
console.log(msg);
console.log("=========================");

// ------------------ Selecting by Name ------------------
// Takes the 'name' attribute from the <input> tags in HTML
let btn = document.getElementsByName("language");
console.log("Name Selector Output (NodeList of radio buttons):");
console.log(btn); // Only logs the NodeList (like an array)
console.log("=========================");

// Print each radio button's attributes
for (let i = 0; i < btn.length; i++) {
    console.log(`Radio Button ${i + 1}`);
    console.log("Type:", btn[i].type);
    console.log("Name:", btn[i].name);
    console.log("Value:", btn[i].value);
    console.log("=========================");
}

// ------------------ Selecting by Tag ------------------
// Selects all <h1> elements
let tag = document.getElementsByTagName("h1");
console.log("Tag Selector Output (first <h1>):");
console.log(tag[0]);
console.log("All <h1> Elements:");
console.log(tag);
console.log("=========================");

// ------------------ Selecting by Class (inside a parent) ------------------
// Selects elements with class="class" inside the element with id="container"
// Works with every DOM selector
let cont = document.getElementById("container");
let className = cont.getElementsByClassName("class");

console.log("Class Selector (within container):");
for (let i = 0; i < className.length; i++) {
    console.log(`Element ${i + 1}`);
    console.log("Inner Text:", className[i].innerText);
    console.log("Outer HTML:", className[i].outerHTML);
    console.log("=========================");
}
console.log("All class elements within container:");
console.log(className);
console.log("=========================");

// ------------------ Query Selector ------------------
// Selects the FIRST element that matches a CSS selector
// .style = selects class="style"
// #style = selects id="style"
let styles = document.querySelector(".style");
console.log("Query Selector (.style) - First Match Only:");
console.log(styles);
console.log("Inner Text:", styles.innerText);
console.log("Outer HTML:", styles.outerHTML);
console.log("=========================");

// ------------------ Query Selector All ------------------
// Selects ALL elements that match the CSS selector
let allStyle = document.querySelectorAll(".style");
console.log("Query Selector All (.style): NodeList of matches:");
console.log(allStyle);

for (let i = 0; i < allStyle.length; i++) {
    console.log(`.style Element ${i + 1}`);
    console.log("Inner Text:", allStyle[i].innerText);
    console.log("Outer HTML:", allStyle[i].outerHTML);
    console.log("=========================");
}

// ------------------ Section-Specific Selection ------------------
// Will select ONLY <h1> elements INSIDE <section> tags
// "section h1" → targets all <h1> that are children (direct or indirect) of <section>
// "section, h1" → selects ALL <section> elements AND ALL <h1> elements in the entire DOM regardless of inheritance
let section = document.querySelectorAll("section h1");
console.log("Query Selector (section h1):");
for (let i = 0; i < section.length; i++) {
    console.log(`Section H1 Element ${i + 1}`);
    console.log("Inner Text:", section[i].innerText);
    console.log("Outer HTML:", section[i].outerHTML);
    console.log("=========================");
}
