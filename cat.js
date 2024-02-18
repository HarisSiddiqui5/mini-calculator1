import inquirer from "inquirer";
let loop = true;
while (loop) {
    const userInput = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter First Number!"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Second Number"
        },
        {
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
            message: "select the operator!"
        }
    ]);
    const num1 = userInput.num1;
    const num2 = userInput.num2;
    const operator = userInput.operator;
    if (num1 && num2) {
        if (operator === "Addition") {
            console.log(`\nThe answer of ${num1} + ${num2} =${num1 + num2}`);
        }
        else if (operator === "subtraction") {
            console.log(`\nthe answer of ${num1} - ${num2} = ${num1 - num2}`);
        }
        else if (operator === "multiplication") {
            console.log(`\nthe answer of ${num1} * ${num2} = ${num1 * num2}`);
        }
        else if (operator === "division") {
            console.log(`\nthe answer of ${num1} / ${num2} = ${num1 / num2}`);
        }
    }
    else {
        console.log("please inter a valid number!");
    }
    const calulateMore = await inquirer.prompt({
        type: "confirm",
        name: "more",
        message: "do you want more calculation?",
        default: false
    });
    if (!calulateMore.more) {
        loop = false;
        console.log("\n Thank You!");
    }
}
