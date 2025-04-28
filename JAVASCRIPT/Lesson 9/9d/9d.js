const nameForm = document.querySelector('#name-form');
const submit = document.querySelector("#submit");
let name = document.createElement("p");

document.body.appendChild(name);

function getName() {
    const user = nameForm.value.trim();
    if (user) {
        name.textContent = `Your name is: ${user}`;
    } else {
        name.textContent = `Please enter your name`;
    }
}



//Form input
nameForm.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getName();
    }
});

submit.addEventListener('click', () => getName());