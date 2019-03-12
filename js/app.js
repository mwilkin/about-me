'use strict';
var greeting = 'Howdy ';
var name = 'Matt';

var welcomeMessage = greeting + name + '!';

var element = document.getElementById('greeting');
element.textContent = welcomeMessage;

