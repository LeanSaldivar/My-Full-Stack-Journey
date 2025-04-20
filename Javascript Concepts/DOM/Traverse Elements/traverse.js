// --------------------------------------------
// 🔍 DOM Traversing
// --------------------------------------------

// ✅ Select an Element to Start With
let txt = document.querySelector(".text");

// --------------------------------------------
// 🟢 1. Select Parent Element
// --------------------------------------------

// parentNode includes any node (even non-element like text nodes)
// parentElement guarantees it’s an actual HTML element
console.log("📌 Parent Node of .text:");
console.log(txt.parentNode);     // or use txt.parentElement

// --------------------------------------------
// 🟢 2. Select Child Elements
// --------------------------------------------

let parent = document.querySelector(".title");

// Returns the first child node (can be whitespace)
console.log("👶 First Child Node (can be text):");
console.log(parent.firstChild);

// Returns the first HTML element child only
console.log("👶 First Element Child:");
console.log(parent.firstElementChild);

// Last child node (can be text)
console.log("👶 Last Child Node (can be text):");
console.log(parent.lastChild);

// Last element child
console.log("👶 Last Element Child:");
console.log(parent.lastElementChild);

// List of all child nodes (includes whitespace and comments)
console.log("📃 All Child Nodes (including text):");
console.log(parent.childNodes);

// Loop through each child node
console.log("📃 Looping through childNodes:");
for (let i = 0; i < parent.childNodes.length; i++) {
    console.log(parent.childNodes[i]);
}

// Counts only HTML child elements (ignores text)
console.log("🔢 Count of HTML Child Elements:");
console.log(parent.childElementCount);

// You could also use `.children` instead of `.childNodes` to only get element nodes
console.log("📃 HTML Children Only:");
console.log(parent.children);

// --------------------------------------------
// 🟢 3. Select Sibling Elements
// --------------------------------------------

let second = document.querySelector(".second");

// Previous sibling node (may include whitespace/text node)
console.log("👈 Previous Sibling Node:");
console.log(second.previousSibling);

// Previous element sibling (cleaner and preferred)
console.log("👈 Previous Element Sibling:");
console.log(second.previousElementSibling);

// Next sibling node (may include whitespace/text node)
console.log("👉 Next Sibling Node:");
console.log(second.nextSibling);

// Next element sibling (cleaner and preferred)
console.log("👉 Next Element Sibling:");
console.log(second.nextElementSibling);

// --------------------------------------------
// 🔄 Best Practice:
// Always use .firstElementChild, .children, and .nextElementSibling
// over their counterparts that may include text nodes.
// --------------------------------------------
