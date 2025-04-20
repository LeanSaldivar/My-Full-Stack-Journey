function coinFlip() {
    const random = Math.random().toFixed(1);

    const condition = (random < 0.5 ? `${random} is heads` : `${random} is Tails`);

    const displayValue = document.getElementById("coin");
    displayValue.value ='';
    displayValue.value += condition;

    console.log(displayValue);
}

