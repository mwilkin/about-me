'use strict';

var greeting = 'Howdy ';
var name = prompt('What is your name');
console.log(name);

var element = document.getElementById('greeting');
console.log(element);

console.log(welcomeMessage);
var welcomeMessage = greeting + name.toUpperCase() + '!';
element.textContent = welcomeMessage;




