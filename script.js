const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");

const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-clear-all]");
const operand = document.querySelector("[data-operand]");

function addNumber(e) {
  let button = e.target.innerText;

  operand.innerText += button;
}

function addOperation(e) {
  let operation = e.target.innerText;
  operand.innerText += operation;
}

numberButtons.forEach((button) => {
  button.addEventListener("click", addNumber);
});

operationButtons.forEach((operation) => {
  operation.addEventListener("click", addOperation);
});

allClearButton.addEventListener("click", () => {
  operand.innerText = "";
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
