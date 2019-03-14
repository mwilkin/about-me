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
  alert('Too bad! You have to play.');
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

//Question 2

var question2 = prompt('Do I like snowsports?');
console.log(question2);

if(question2.toLowerCase() === 'yes' || question2.toLowerCase() === 'y'){
  alert('You are correct!');
  correctAnswers += 1;
  console.log(correctAnswers);
} else {
  alert('Nope. You\'re wrong. I love snowsports.');
}

//Question 3

var question3 = prompt('Do I like cream with my coffee?');
console.log(question2);

if(question3.toLowerCase() === 'no' || question3.toLowerCase() === 'n'){
  alert('You are correct!');
  correctAnswers += 1;
  console.log(correctAnswers);
} else {
  alert('Nope. You\'r wrong. I love coffee.');
}

//Question 4

var question4 = prompt('Do I like to workout?');
console.log(question2);

if(question4.toLowerCase() === 'yes' || question4.toLowerCase() === 'y'){
  alert('You are correct!');
  correctAnswers += 1;
  console.log(correctAnswers);
} else {
  alert('Nope. You\'r wrong. I love to workout.');
}

//Question 5

var question5 = prompt('Do I like to stay up past 9:30 PM?');
console.log(question5);

if(question5.toLowerCase() === 'no' || question4.toLowerCase() === 'NO'){
  alert('You are correct! I like to go to sleep early.');
  correctAnswers += 1;
  console.log(correctAnswers);
} else { 
  alert('Nope. I\'m an early riser.');
}

if (correctAnswers >= 3){
  alert('Great job! I guess you know me.');
  alert('You got ' + correctAnswers + ' out of 4 correct.');
} else {
  alert('Sorry. You lose.');
}

//Question 6


//Question 7
