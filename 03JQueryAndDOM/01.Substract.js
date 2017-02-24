/**
 * Created by Lucifer on 24-Oct-16.
 */
function subtract() {
    let firstNumber = $('#firstNumber');
    let secondNumber = $('#secondNumber');
    let resultDiv = $('#result');
    let result = parseFloat(firstNumber.val())- parseFloat(secondNumber.val());
    resultDiv[0].textContent = result;
}