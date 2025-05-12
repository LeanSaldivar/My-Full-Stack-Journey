let calculations = {
    input: '',
    output: ''
};
function addInput(input) {
    const calculator = document.getElementById('display');
    calculator.value += input;

   saveInput(calculator.value);
}

function addOperator(operator) {
    const calculator = document.getElementById('display');
    calculator.value += operator;
}

function deleteLast() {
    const calculator = document.getElementById('display');
    calculator.value = calculator.value.slice(0, -1);
}

function removeInput() {
    const calculator = document.getElementById('display');
    calculator.value = '';
}

// Evaluate the expression
function calculateResult() {
    const display = document.getElementById('display');
    try {

        display.value = eval(display.value);

        saveOutput(display.value);

       persistCalculations();
    } catch (e) {
        alert("Invalid expression");
    }
}


function saveInput(inputValue) {
    calculations.input = inputValue;
    console.log("Input saved:", calculations.input);
}

function saveOutput(outputValue) {
    calculations.output = outputValue;
    console.log("Output saved:", calculations.output);
}

function persistCalculations() {
    try {
        const currentLog = {
            input: calculations.input,
            output: calculations.output
        };

        let history = JSON.parse(localStorage.getItem("calculations")) || [];

        history.push(currentLog);

        localStorage.setItem("calculations", JSON.stringify(history));

        console.log("Updated Calculation History:", history);
    } catch (e) {
        console.error("Failed to persist calculations:", e);
    }
}
