// var inputBox1 = document.getElementById('output-screen');
// var operatorBox = document.getElementById('operator');
// var inputBox2 = document.getElementById('screen');
// var resultElement = document.getElementById('result');

// var number1 = '';
// var operator = '';
// var number2 = '';
// var result = '';

// function num(digit) {
//     if (!operator) {
//         number1 = number1 + digit;
//         inputBox1.value = number1;

//     }
//     else {                                                 
//         number2 = number2 + digit;
//         inputBox2.value = number2;

//     }
// }
// function operater(op) {
//     operatorBox.value = op;
//     operator = op;
// }


// function results() {
//     if (operator == '+') {
//         result = parseInt(number1) + parseInt(number2);
//         resultElement.value = result;


//     }
//     else if (operator == '-'){
//         result = number1 - number2;
//         resultElement.value=result;
//     }
//     else if (operator == '*'){
//         result = number1 * number2;
//         resultElement.value=result;
//     }
//     else if (operator == '/'){
//         result = number1 / number2;
//         resultElement.value=result;
//     }


// }
function clearScreen() {
    document.getElementById("result").value = "";
    }
     
    // This function display values
    function display(value) {
    document.getElementById("result").value += value;
    }
     
    // This function evaluates the expression and returns result
    function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    }
