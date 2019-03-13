'use strict';

//welcome prompt. Take user name

var userName = prompt('What is your name?');
console.log(userName);

//customized user response

var welcomeMessage = prompt('Hello ' + userName.toUpperCase() + '! So you think you know me?');
console.log(welcomeMessage);

//welcome propmt logic
//need a fix: must skip oversubsequent js if n/no is given by user

if(welcomeMessage.toLowerCase() === "yes" || welcomeMessage.toLowerCase() === "y"){
  console.log(welcomeMessage);
  alert("Cool! Let's Rock!");
} else {
  alert("Goodbye");
}

//variable to track total correct user answers

var correctAnswers = 0;

//Question 1
var question1 = prompt('Do I have a dog?');
console.log(question1);

if(question1.toLowerCase() === 'y' || question1.toLowerCase() === 'yes'){
  alert('Correcto-mundo!');
  correctAnswers += 1;
} else {
  alert('Sorry sucker! You are WRONG!');
}







