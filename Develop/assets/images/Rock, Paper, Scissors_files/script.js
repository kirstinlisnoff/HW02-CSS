
const options = ["rock", "paper", "scissors"]
  console.log(options);

function computerChoice() {

    return options[Math.floor(Math.random() * options.length)];
}

let student = prompt("Rock, paper, or scissors?");
console.log(student);

let computer = computerChoice();
console.log(computer);

if (computer === student){
    console.log("It's a tie!");
}