let type = document.querySelector('#type');
let text = Object.assign(document.createElement('p'), {
    className: 'output-text',
});
document.body.appendChild(text);document.body.appendChild(text);

function getText() {
    text.textContent = type.value || "Start typing...";
}

type.addEventListener('input', (e) => getText())