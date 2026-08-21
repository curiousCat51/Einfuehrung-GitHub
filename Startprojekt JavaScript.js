// Function zur Addition, Subtraktion, Multiplikation und Division von zwei Zahlen
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
// Main-Funktion fragt den Nutzer nach 2 Zahlen und der gewünschten Operation und gibt am Ende das Ergebnis aus.
function main(){
    // If arguments are provided, use them: `node Startprojekt JavaScript.js 3 4 +`
    const args = process.argv.slice(2);
    if (args.length >= 3) {
        const num1 = Number(args[0]);
        const num2 = Number(args[1]);
        const operation = args[2];

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Invalid number input.");
            return;
        }

        Operation(num1, num2, operation);
        return;
    }

    // Otherwise fall back to interactive prompts using Node readline
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the first number: ', (first) => {
        rl.question('Enter the second number: ', (second) => {
            rl.question('Enter the operation (+, -, *, /): ', (operation) => {
                const num1 = Number(first);
                const num2 = Number(second);
                if (isNaN(num1) || isNaN(num2)) {
                    console.log('Invalid number input.');
                    rl.close();
                    return;
                }
                Operation(num1, num2, operation);
                rl.close();
            });
        });
    });
}
// Erhält eine Operation aus der Main-Funktion und ruft die entsprechende Rechenfunktion auf.
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
// Ruft die Main-Funktion auf, um das Programm zu starten.
main();
