import inquirer from 'inquirer';
import chalk from "chalk";

type Task = { task: string; completed: boolean };
type TodoList = Task[];

let todoList: TodoList = [];
console.log(chalk.magentaBright.italic("** WELLCOM TO TODO APP **\n"));

function addTask(task: string) {
    todoList.push({ task, completed: false });
}

function addMoreTasks(tasks: string[]) {
    tasks.forEach(task => {
        addTask(task);
    console.log(chalk.yellow.bold("Add Tasks successfully."));
    });
}

function updateTask(index: number, newTask: string) {
    if (index >= 0 && index < todoList.length) {
        todoList[index].task = newTask;
        console.log(chalk.blue.dim("\nTask updated successfully."));
    } else {
        console.log(chalk.bgRed("\nInvalid task index."));
    }
}

function viewTasks() {
    if (todoList.length === 0) {
        console.log(chalk.red.bold("No tasks in the list."));
    } else {
        console.log("Todo List:");
        todoList.forEach((task, index) => {
            console.log(`${index + 1}. ${task.completed ? '[X]' : '[ ]'} ${task.task}`);
        });
    }
}

function markAsCompleted(index: number) {
    if (index >= 0 && index < todoList.length) {
        todoList[index].completed = true;
        console.log(chalk.cyan.dim("\nTask marked as completed."));
    } else {
        console.log(chalk.underline.red("\nInvalid task index."));
    }
}

function deleteTask(index: number) {
    if (index >= 0 && index < todoList.length) {
        todoList.splice(index, 1);
        console.log(chalk.bgBlack("\nTask deleted successfully."));
    } else {
        console.log(chalk.underline.red("\nInvalid task index."));
    }
}

async function main() {
    console.log(chalk.bgWhiteBright("\nTodo App Menu:"));
    console.log(chalk.cyan("1. Add task"));
    console.log(chalk.cyan("2. Add more tasks"));
    console.log(chalk.cyan("3. Update task"));
    console.log(chalk.cyan("4. View tasks"));
    console.log(chalk.cyan("5. Mark task as completed"));
    console.log(chalk.cyan("6. Delete task"));
    console.log(chalk.cyan("7. Exit"));

    while (true) {
        const { choice } = await inquirer.prompt([{
            type: 'input',
            name: 'choice',
            message: chalk.blueBright.dim('Enter your choice:')
        }]);

        switch (choice) {
            case '1':
                await addTaskPrompt();
                break;
            case '2':
                await addMoreTasksPrompt();
                break;
            case '3':
                await updateTaskPrompt();
                break;
            case '4':
                viewTasks();
                break;
            case '5':
                await markAsCompletedPrompt();
                break;
            case '6':
                await deleteTaskPrompt();
                break;
            case '7':
                console.log(chalk.blueBright("\nExiting..."));
                return;
            default:
                console.log(chalk.redBright.underline("\Invalid choice. Please try again."));
        }
    }
}

async function addTaskPrompt() {
    const { task } = await inquirer.prompt({
        type: 'input',
        name: 'task',
        message: chalk.bgBlack.italic('\nEnter your task:')
    });
    addTask(task);
}

async function addMoreTasksPrompt() {
    const { tasks } = await inquirer.prompt({
        type: 'input',
        name: 'tasks',
        message: chalk.green.dim('\nEnter tasks separated by commas:')
    });
    addMoreTasks(tasks.split(','));
}

async function updateTaskPrompt() {
    const { index, newTask } = await inquirer.prompt([
        {
            type: 'input',
            name: 'index',
            message: chalk.yellowBright.bold('\nEnter task index to update:')
        },
        {
            type: 'input',
            name: 'newTask',
            message: chalk.green.underline('\nEnter new task:')
        }
    ]);
    updateTask(parseInt(index) - 1, newTask);
}

async function markAsCompletedPrompt() {
    const { index } = await inquirer.prompt({
        type: 'input',
        name: 'index',
        message: chalk.magentaBright.italic('\nEnter task index to mark as completed:')
    });
    markAsCompleted(parseInt(index) - 1);
}

async function deleteTaskPrompt() {
    const { index } = await inquirer.prompt({
        type: 'input',
        name: 'index',
        message: chalk.red.bold.strikethrough('\nEnter task index to delete:')
    });
    deleteTask(parseInt(index) - 1);
}

main();



