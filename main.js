import inquirer from "inquirer";
let todos = [];
let conditionTodo = true;
while (conditionTodo) {
    let todoQ = await inquirer.prompt([
        {
            name: "firstQ",
            type: "input",
            message: "what would you like to add in your todo?"
        },
        {
            name: "secondQ",
            type: "confirm",
            message: "what would you like to add more in your todo?",
            default: true
        }
    ]);
    todos.push(todoQ.firstQ);
    console.log(todos);
    conditionTodo = todoQ.secondQ;
}
