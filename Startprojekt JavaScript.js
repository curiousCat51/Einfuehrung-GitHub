function Addition(a , b){
    return a + b;
}
function Subtraction( a , b){
    if(a >= b){
        return a - b;
    } else {
        return b - a;
    }
}
function Multiplication(a , b){
    return a * b;
}
function Division(a , b){
    if(b === 0){
        return "Division by zero is not allowed.";
    }
    return a / b;
}
function main(){
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Enter the operation (+, -, *, /):");

    Operation(num1, num2, operation);
}
function Operation(a , b , op){
    switch(op) {
        case "+":
            console.log("Result: " + Addition(a, b));
            break;
        case "-":
            console.log("Result: " + Subtraction(a, b));
            break;
        case "*":
            console.log("Result: " + Multiplication(a, b));
            break;
        case "/":
            console.log("Result: " + Division(a, b));
            break;
        default:
            console.log("Invalid operation.");
    }
}
main();
