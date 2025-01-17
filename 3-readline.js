const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, 
                                    output : process.stdout});

//random numer (1-10)
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
//sum of random numbers
let answer = num1 + num2;

//create question
rl.question(`What is ${num1} + ${num2}? \n`,
//check if correct
(userInput) => {
    if(userInput.trim() == answer){
        //close
        rl.close();
    }else{
        //try again
        rl.setPrompt('Incorrect response, please try again\n');
        rl.prompt();
        rl.on('line', (userImput) => {
            if(userImput.trim() == answer){
                rl.close();
        }else{
            rl.setPrompt(`Your answer of ${userImput} is incorrect, try again\n`);
            rl.prompt(); 
        }});
    }
});

//if close write correct
rl.on('close', () => {
    console.log('Correct!');
});