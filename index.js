function multiply() {
    const firstNumber = numberOne.value;
    const secondNumber = numberTwo.value;
    const product = firstNumber * secondNumber;
    console.log(product);
    answer.innerHTML = product
}
function Subtraction() {
    const firstNumber = numberOne.value;
    const secondNumber = numberTwo.value;
    const Subtraction = firstNumber - secondNumber;
    console.log(Subtraction);
    answer.innerHTML = Subtraction
}
function division() {
    const firstNumber = numberOne.value;
    const secondNumber = numberTwo.value;
    const division = firstNumber / secondNumber;
    console.log(division);
    answer.innerHTML = division
}
function Addition() {
    const firstNumber =Number(numberOne.value );
    const secondNumber =Number(numberTwo.value );
    const Addition = firstNumber + secondNumber;
    console.log(Addition);
    answer.innerHTML = Addition
}

