import inquirer from "inquirer";
;
//array
let todolist = [];
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
        case 'Delete Task':
            break;
        case 'Exit':
            console.log('Goodbye');
            return;
    }
}
mainMenu();
let addTask = async () => {
    let { task } = await inquirer.prompt({
        type: 'input',
        name: 'task',
        message: 'Enter your Task',
    });
    todolist.push({ task, completed: false });
    console.log("task added successfuly");
};
let viewList = () => {
    console.log("**** To Do List ****");
    todolist.forEach(item, index);
};
{
    console.log(`${index + y1}.[${item.completed}]`);
}
