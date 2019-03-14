'use strict';
function myGame(){

  //welcome prompt. Take user name

  var userName = prompt('What is your name?').toUpperCase();
  console.log(userName);

  //customized user response

  var welcomeMessage = prompt('Hello ' + userName + '! So you think you know me?');
  console.log(welcomeMessage);

  //welcome propmt logic
  //need a fix: must skip oversubsequent js if n/no is given by user

  if(welcomeMessage.toLowerCase() === 'yes' || welcomeMessage.toLowerCase() === 'y'){
    console.log(welcomeMessage);
    alert('Cool! Let\'s Rock!');
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

  //Question 6
  //takes numeric imput, guess favorite number, only 4 guesses given
  //not quite working

  var guessCounter = 0;
  var favoriteNumber = 7;


  var userNumberGuess = parseInt(prompt('What is my favorite number?'));
  console.log(userNumberGuess);

  for(var i = 0; i < 4; i++ ) {

    if (userNumberGuess === favoriteNumber) {
      alert('You got it.' + favoriteNumber + ' is my favorite number.');
      correctAnswers+=1;
      break;
    } else {
      alert('Sorry. That is not my number');
      userNumberGuess = parseInt(prompt('Guess again!'));
      guessCounter += 1;
    }
  }


  //Question 7
  //store multiple correct answers in an array, 6 tries to get 1 correct answer.upon a correct answer or using up tries, a message displays indicating all of the possible correct answers.

  var correctCities = ['portland', 'boston', 'bend', 'medford', 'sommerville'];
  var cityCounter = 0;
  var cityGuess = false;

  while(cityCounter < 6 && cityGuess === false){
    var user = prompt('What cities have I lived?').toLowerCase();
    for(var j = 0; j < correctCities.length; j++){
      if (user === correctCities[j]){
        cityCounter+=1;
        alert('Congrats, you guessed ' + user);
        cityGuess = true;
        guessCounter += 1;
      }

    }
  }
  alert('I also lived in Portland and Boston Bend and Medford and Sommerville');


  if (correctAnswers >= 5){
    alert('Great job! I guess you know me. You got ' + correctAnswers + ' out of 7 correct.');
  } else {
    alert('Sorry. You lose. Not enough points');
  }
}
