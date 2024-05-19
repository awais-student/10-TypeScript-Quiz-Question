
import inquirer from "inquirer"
import chalk from "chalk"

let quizQuestion = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.magentaBright("What is your name?")
    },
    {
        name: "cnic",
        type: "number",
        message: chalk.yellow("Your CNIC num is:")
    },
    {
        name: "test",
        type: "confirm",
        message: chalk.green("Are you ready for test?"),
        default: "false"
    },
    {
        name: "q1",
        type: "list",
        message: chalk.yellow.bold("\nQ1: Which command is used to compile Typescript code?\n"),
        choices: ["ts build", "ts compile", "tsc" , "typescript"]
    },
    {
        name: "q2",
        type: "list",
        message: chalk.yellow.bold("\nQ2: What will be the output of this?\n  let a = 5; \nconsole.log(a++);\n"),
        choices: ["6", "7", "4", "5"]
    },
    {
        name: "q3",
        type: "list",
        message: chalk.yellow.bold("\nQ3: What will be the output of this? \nlet a = 7; \nconsole.log(a++ * a--);\n"),
        choices: ["50", "56", "49", "48"]
    },
    {
        name: "q4",
        type: "list",
        message: chalk.yellow.bold("\nQ4: What will be the output of this? \n let b = 4; \n console.log(a++ + a++);\n"),
        choices: ["9", "10", "11", "8"]
    },
    {
        name: "q5",
        type: "list",
        message: chalk.yellow.bold("\nQ5: What will be the output of this? \n console.log(2 + '2')\n"),
        choices: ["4", "22", "2", "NaN"]
    },
    {
        name: "q6",
        type: "list",
        message: chalk.yellow.bold("\nQ6: Array can hold only numbers?\n"),
        choices: ["Yes", "No", "May be", "All of them"]
    },
    {
        name: "q7",
        type: "list",
        message: chalk.yellow.bold("\nQ7: What will be the output?\n let numbers:number[] = [1,2,3,4];\n numbers.splice(1,1,5);\n console.log(numbers);\n"),
        choices: ["1,2,3,4,5", "1,2,3,5", "1,3,4", "1,5,3,4"]
    },
    {
        name: "q8",
        type: "list",
        message: chalk.yellow.bold("\nQ8: What will be the output? \n const num1: number = 5;\n const num2: number = 6; \n console.log(num1 ===5 && num2 === 5\n);\n"),
        choices:["False", "No", "Yes", "True"]
    }, 
    {
        name: "q9",
        type: "list",
        message: chalk.yellow.bold("Q9: What will be the output? \n let a =9; \n console.log(--a - a--) \n"),
        choices: ["16", "0", "15", "Error"]
    },
    {
        name: "q10",
        type: "list",
        message: chalk.yellow.bold("Q10: What will be the output? \n let number = 4; \n console.log(--number * number++); \n"),
        choices: ["6", "8", "10", "12"]
    }
])


console.log(chalk.blue.bold(`1: Your Answer is submited: ${quizQuestion.q1}`))

if(quizQuestion.q1 == "ts build"){
    console.log(chalk.red.bold("Ans1: Wrong Answer"));
}else if(quizQuestion.q1 == "ts compile"){
    console.log(chalk.red.bold("Ans1: Wrong Answer"));
}else if(quizQuestion.q1 == "tsc"){
    console.log(chalk.green.bold("Ans1: Correct Answer"));
}else if(quizQuestion.q1 == "typescript"){
    console.log(chalk.red.bold("Ans1: Wrong Answer"));
}
console.log("\n")

console.log(chalk.blue.bold(`2: Your Answer is submited: ${quizQuestion.q2}`))

if(quizQuestion.q2 == "6"){
    console.log(chalk.red.bold("Ans2: Wrong Answer"));
}else if(quizQuestion.q2 == "7"){
    console.log(chalk.red.bold("Ans2: Wrong Answer"));
}else if(quizQuestion.q2 == "4"){
    console.log(chalk.red.bold("Ans2: Wrong Answer"));
}else if(quizQuestion.q2 == "5"){
    console.log(chalk.green.bold("Ans2: Correct Answer"));
}
console.log("\n")

console.log(chalk.blue.bold(`3: Your Answer is submited: ${quizQuestion.q3}`))

if(quizQuestion.q3 === "50"){
    console.log(chalk.red.bold("Ans3: Wrong Answer"));
}else if(quizQuestion.q3 == "56"){
    console.log(chalk.green.bold("Ans3: Correct Answer"));
}else if(quizQuestion.q3 == "49"){
    console.log(chalk.red.bold("Ans3: Wrong Answer"));
}else if(quizQuestion.q3 === "48"){
    console.log(chalk.red.bold("Ans3: Wrong Answer"));
}
console.log("\n")

console.log(chalk.blue.bold(`4: Your Answer is submited: ${quizQuestion.q4}`))

if(quizQuestion.q4 == "9"){
    console.log(chalk.green.bold("Ans4: Correct Answer"));
}else if(quizQuestion.q4 == "10"){
    console.log(chalk.red.bold("Ans4: Wrong Answer"));
}else if(quizQuestion.q4 == "11"){
    console.log(chalk.red.bold("Ans4: Wrong Answer"));
}else if(quizQuestion.q4 == "8"){
    console.log(chalk.red.bold("Ans4: Wrong Answer"));
}
console.log("\n")

console.log(chalk.blue.bold(`5: Your Answer is submited: ${quizQuestion.q5}`))

if(quizQuestion.q5 == "4"){
    console.log(chalk.red.bold("Ans5: Wrong Answer"));
}else if(quizQuestion.q5 == "22"){
    console.log(chalk.green.bold("Ans5: Correct Answer"));
}else if(quizQuestion.q5 == "2"){
    console.log(chalk.red.bold("Ans5: Wrong Answer"));
}else if(quizQuestion.q5 == "NaN"){
    console.log(chalk.red.bold("Ans5: Wrong Answer"));
}
console.log("\n")

console.log(chalk.blue.bold(`6: Your Answer is submited: ${quizQuestion.q6}`))

if(quizQuestion.q6 == "Yes"){
    console.log(chalk.red.bold("Ans6: Wrong Answer"));
}else if(quizQuestion.q6 == "No"){
    console.log(chalk.green.bold("Ans6: Correct Answer"));
}else if(quizQuestion.q6 == "May be"){
    console.log(chalk.red.bold("Ans6: Wrong Answer"));
}else if(quizQuestion.q6 == "All of them"){
    console.log(chalk.red.bold("Ans6: Wrong Answer"));
}
console.log("\n")

console.log(chalk.blue.bold(`7: Your Answer is submited: ${quizQuestion.q7}`))

if(quizQuestion.q7 == "1,2,3,4,5"){
    console.log(chalk.red.bold("Ans7: Wrong Answer"));
}else if(quizQuestion.q7 == "1,2,3,5"){
    console.log(chalk.red.bold("Ans7: Wrong Answer"));
}else if(quizQuestion.q7 == "1,3,4"){
    console.log(chalk.red.bold("Ans7: Wrong Answer"));
}else if(quizQuestion.q7 == "1,5,3,4"){
    console.log(chalk.green.bold("Ans7: Correct Answer"));
}
console.log("\n")

console.log(chalk.blue.bold(`8: Your Answer is submited: ${quizQuestion.q8}`))

if(quizQuestion.q8 == "False"){
    console.log(chalk.green.bold("Ans8: Correct Answer"));
}else if(quizQuestion.q8 == "No"){
    console.log(chalk.red.bold("Ans8: Wrong Answer"));
}else if(quizQuestion.q8 == "Yes"){
    console.log(chalk.red.bold("Ans8: Wrong Answer"));
}else if(quizQuestion.q8 == "True"){
    console.log(chalk.red.bold("Ans8: Wrong Answer"));
}
console.log("\n")

console.log(chalk.blue.bold(`9: Your Answer is submited: ${quizQuestion.q9}`))

if(quizQuestion.q9 == "16"){
    console.log(chalk.red.bold("Ans9: Wrong Answer"));
}else if(quizQuestion.q9 == "0"){
    console.log(chalk.green.bold("Ans9: Correct Answer"));
}else if(quizQuestion.q9 == "15"){
    console.log(chalk.red.bold("Ans9: Wrong Answer"));
}else if(quizQuestion.q9 == "Error"){
    console.log(chalk.red.bold("Ans9: Wrong Answer"));
}
console.log("\n")

console.log(chalk.blue.bold(`10: Your Answer is submited: ${quizQuestion.q10}`))

if(quizQuestion.q10 == "6"){
    console.log(chalk.red.bold("Ans10: Wrong Answer"));
}else if(quizQuestion.q10 == "8"){
    console.log(chalk.red.bold("Ans10: Wrong Answer"));
}else if(quizQuestion.q10 == "10"){
    console.log(chalk.red.bold("Ans10: Wrong Answer"));
}else if(quizQuestion.q10 == "12"){
    console.log(chalk.green.bold("Ans10: Correct Answer"));
}