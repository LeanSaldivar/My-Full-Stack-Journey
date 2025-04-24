//Event Bubbling:
/**
 * Event starts at the most sepcific element and
 * flows towards least specific element
 */
let button = document.querySelector('#button2');

//Event Handlers/Listeners:
//Event Handler Attribute (Click/OnClick attribute in html)

/**
 * Event Handler
 * When the event occurs, the web browser passed an
 * Event Object to the event handler
 */

//Onclick
let button2 = document.querySelector('#button3');
button2.onclick = function () {
    alert('Onclick');
}

//Event Listener
button.addEventListener('click', (e) => {
    alert('Event Listener');
})

// mousedown:
/**
 * Event fires when you press the mouse button on the element
 */
document.getElementById("mousedown-box").addEventListener("mousedown", (e) => {
    alert("Mouse down on the element.");
});

// mouseup:
/**
 * Event fires when you release the mouse button on the element
 */
document.getElementById("mouseup-box").addEventListener("mouseup", (e) => {
    alert("Mouse button released on the element.");
});

// mouseover:
/**
 * Event fires when the cursor move from outside to
 * inside the boundaries of the element
 */
document.getElementById("mouseover-box").addEventListener("mouseover", (e) => {
    alert("Cursor entered the element's boundary.");
});

// mouseout
/**
 * Event fires when the cursor is over an element and
 * then moves to another element
 */
document.getElementById("mouseout-box").addEventListener("mouseout", (e) => {
    alert("Cursor left the element to another.");
});

// keydown
/**
 * Event fires when you press a key on the keyboard &
 * fires repeatedly while you're holding down the key.
 */
document.getElementById("keydown-box").addEventListener("keydown", (e) => {
    alert(`Key Down: ${e.key}`);
});

// keyup
/**
 * EVent fires when you release a key on the keyboard
 */
document.getElementById("keyup-box").addEventListener("keyup", (e) => {
    alert(`Key Up: ${e.key}`);
});

// keypress:
/**
 * Event fires when you press a character on keyboard
 * like a,b, c... It fires repeatedly while you hold down
 * the key on the keyboard
 */
document.getElementById("keypress-box").addEventListener("keypress", (e) => {
    alert(`Key Pressed: ${e.key}`);
});

// Scroll:
/**
 * Event fires when you scroll a document or an
 * element, the scroll events fire
 */
document.getElementById("scroll-box").addEventListener("scroll", (e) => {
    alert("Element is being scrolled.");
});
