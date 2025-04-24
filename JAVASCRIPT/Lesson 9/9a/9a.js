const heads = document.querySelector('#heads');
const tails = document.querySelector('#tails');

const name = document.createElement('p');
document.body.appendChild(name);

function showChoice(choice) {
    name.textContent = `You chose ${choice}`;
}

heads.addEventListener('click', () => showChoice(heads.textContent));
tails.addEventListener('click', () => showChoice(tails.textContent));
