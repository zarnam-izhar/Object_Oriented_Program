import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome!");
        const ans = await inquirer.prompt({
            name: "Select",
            type: "list",
            message: "Who would you like to interact with? ",
            choices: ["staff", "student", "exit"]
        });
        if (ans.Select == "staff") {
            console.log("You approach the staff room. Please feel free to ask for information.");
        }
        else if (ans.Select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name you wish to interact with:",
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello I am ${name.name}. Nice to meet you!`);
                console.log("New student added");
                console.log("Current student list:");
                console.log(persons.students);
            }
            else {
                console.log(`Hello I am ${student.name}. Nice to see you again!`);
                console.log("Existing student list");
                console.log(persons.students);
            }
        }
        else if (ans.Select == "exit") {
            console.log("Exiting the program...");
            process.exit();
        }
    } while (true);
};
programStart(persons);
