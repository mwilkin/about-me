'use strict';

var userName = prompt('What is your name?');
console.log(userName);

// var element = document.getElementById('greeting');
// console.log(element);

var welcomeMessage = prompt('Hello ' + userName.toUpperCase() + '! So you think you know me?');
console.log(welcomeMessage);

if(welcomeMessage.toLowerCase() === "yes" || welcomeMessage.toLowerCase() === "y"){
  console.log(welcomeMessage);
  alert("Cool! Let's Rock!");
} else {
  alert("Goodbye");
}



// var myString = 'foo';
// console.log('Before functon calls:', myString)
// console.log('toLowerCase():', myString.toLowerCase());
// console.log('toUpperCase():', myString.toUpperCase());






