const path = require("path");

let hello = "Hello World from Node.js";
let justNode = hello.slice(17)
console.log(`Who let the ${justNode} out?`);

console.log(__dirname);
console.log(`The file name is ${path.basename(__filename)}`);

for (let key in global) {
    console.log(key)
}

function grab(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

let greeting = grab("--greeting");
let user = grab("--user");

console.log(greeting);
console.log(user);

process.stdout.write("Hello \n \n");

const questions = [
    "What is your name?",
    "What would you rather be doing",
    "What is your preferred programming langugae",
];

const answers = [];

function ask(i = 0) {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
}

ask();

process.stdin.on("data", function(data) {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on("exit", function() {
    process.stdout.write("\n\n\n\n");
    process.stdout.write(
        `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`
    );
})

