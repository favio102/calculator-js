const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");

const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-clear-all]");
const operand = document.querySelector("[data-operand]");
const buttons = document.querySelectorAll('button');

window.addEventListener('keydown', function(e) {
  const key = this.document.querySelector(`button[data-key='${e.keyCode}']`);
  key.click();
});

function addNumber(e) {
    let button = e.target.innerText;
    if (operand.innerText.length >= 15) {
        operand.innerText = "Error";
        disableButtons();
        deleteButton.disabled = true;
        equalsButton.disabled = true;
    } else {
        operand.innerText += button;
    }
}

function addOperation(e) {
    let operation = e.target.innerText;
    if (operand.innerText === "Error") {
        return;
    }

    operand.innerText += operation;
    if (operand.innerText === "Error") {
        disableButtons();
        deleteButton.disabled = false;
        equalsButton.disabled = false;
    }
}

function disableButtons() {
    operationButtons.forEach((button) => {
        button.disabled = true;
    });
    numberButtons.forEach((button) => {
        button.disabled = true;
    });
}
numberButtons.forEach((button) => {
    button.addEventListener("click", addNumber);
});

operationButtons.forEach((operation) => {
    operation.addEventListener("click", addOperation);
});

allClearButton.addEventListener("click", () => {
    operand.innerText = "";
    operationButtons.forEach((button) => {
        button.disabled = false;
    });
    numberButtons.forEach((button) => {
        button.disabled = false;
    });
    deleteButton.disabled = false;
    equalsButton.disabled = false;
});

deleteButton.addEventListener("click", () => {
    operand.textContent = operand.textContent.slice(
        0,
        operand.textContent.length - 1
    );
});

equalsButton.addEventListener("click", () => {
    operand.textContent = eval(operand.textContent);
});
