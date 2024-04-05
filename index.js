import inquirer from "inquirer";
;
//array
const todolist = [];
//function
async function mainMenu() {
    const { action } = await inquirer.prompt({
        type: "list",
        name: "action",
        message: "what would you like to do?",
        choices: ["Add Task", "View List", "Mark as completed", "Delete Task", "Exit"]
    });
    switch (action) {
        case 'Add Task':
            await addTask();
            break;
        case 'View List':
            await viewList();
            break;
        case 'Mark as completed':
            await markCompleted();
            break;
        //  case 'Delete Task':
        //     await deleteTask()
        //      break;
        case 'Exit':
            console.log('Goodbye');
            return;
    }
    mainMenu();
}
let addTask = async () => {
    let { task } = await inquirer.prompt({
        type: 'input',
        name: 'task',
        message: 'Enter your Task',
    });
    todolist.push({ task, completed: true });
    console.log("task added successfuly");
};
let viewList = () => {
    console.log("**** To Do List ****");
    todolist.forEach((item, index) => {
        console.log(`${index + 1}.[${item.completed ? 'x' : ''}] ${item.task}`);
    });
    console.log("*****************************");
};
let markCompleted = async () => {
    let { myIndex } = await inquirer.prompt([{
            type: "number",
            name: "myIndex",
            message: "Which task you wont to mark as completed ?",
        }]);
    if (myIndex < 1 || todolist.length) {
        console.log("Invalid task number. 'please try again'");
        return;
    }
    todolist[myIndex - 1].completed = true;
    console.log("task mark as completed ");
};
mainMenu();
