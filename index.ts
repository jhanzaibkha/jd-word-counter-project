#! /usr/bin/env node
// import the 'inquirer' module,which is a command line interface for Node.js 
import inquirer from "inquirer"

// declare a constant 'answers' and assign it to the result of inquirer.prompt function

const answers: {
    sentence: string
} = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message: "Enter your sentences to count the word:"
    }
    
])

const words = answers.sentence.trim().split(" ")

// print the array of words to the console
console.log(words)

// print the word count of the sentence to the console 
console.log(`Your sentence word count is ${words.length}`);