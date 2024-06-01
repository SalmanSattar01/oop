#! /usr/bin/env node

import inquirer from "inquirer";

class Student {
    name:string
    constructor(n:string){
        this.name=n
    }
}

class Person{
    students:Student[]=[]

    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const persons = new Person ()

const programStart = async (persons : Person) => {
    do {
        console.log("welcome guest");
    const ans = await inquirer.prompt({
        type: "list",
        message: "who do you want to talk with?",
        name: "select",
        choices: ["your self", "student"]
    })


if (ans.select == "your self" ){
    console.log(` i am talking to my self`)
    console.log(` i am feeling very well`)
} 
if (ans.select == "student" ){
    const ans = await inquirer.prompt({
        type:"input",
        message:"To Whom student you want to talk with?",
        name:"student",
    })

    const student = persons.students.find(val => val.name ==ans.student)
    if(!student){
        const name = new Student(ans.student)
        persons.addStudent(name)

        console.log(`Hello i am ${name.name}, and i am alright`);
        console.log(persons.students);

    }
        if(student){
            console.log(`hello i am ${student.name}, how may i help you?`);
            console.log(persons.students);
        }
}
    }while(true)
};

programStart(persons)