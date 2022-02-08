'use strict;'

console.log('hey world');

let userName = prompt('What is your name?');
alert(`Welcome ${userName} to my page! Since you're here, we're gonna play a yes or no game!`);

let answerOne = prompt('Do I have a cat?').toLowerCase();

// .toLowerCase will make it accept all lower case inputs 
// .toUpperCase must have yes no answers be all capitals

  if(answerOne === 'yes' || answerOne === 'y'){
  alert ('Yes I do have a cat')
  } else if(answerOne === 'no' || answerOne === 'n'){
  alert('Sorry you are incorrect')
  }
  console.log(`${userName} answered ${answerOne} for question One`)
// acp files individually for to make commenting on a commit easier and cleaner

let answerTwo = prompt('Do I play the bass?').toLowerCase();

  if(answerTwo === 'yes'|| answerTwo === 'y'){
  alert('Unfortunatly I do not, I play the guitar!')
  } else if(answerTwo === 'no' || answerTwo === 'n'){
  alert('Correct! I play the Guitar')
  }
  console.log(`${userName} answered ${answerTwo} for question Two`)

let answerThree = prompt('Is Ryans favorite genre of music Metal?').toLowerCase();
  if(answerThree === 'yes' || answerThree === 'y'){
    alert('Thats correct! Ryan loves his metal!')
  } else if(answerThree === 'no' || answerThree === 'n'){
    alert('What???? Of course Ryan loves metal!')
  }
  console.log(`${userName} answered ${answerThree} for question Three`)

let answerFour = prompt('Is Ryans favorite band Death?').toLowerCase();
  if(answerFour === 'yes' || answerFour === 'y'){
    alert('Oh yeah he does, that is a great band after all')
  } else if(answerFour === 'no' || answerFour === 'n'){
    alert('How could he not? That band is awesome!')
  }
  console.log(`${userName} answered ${answerFour} for question Four`)

let answerFive = prompt('Is this last question relavent?').toLowerCase();
  if(answerFive === 'yes' || answerFive === 'y'){
    alert('No... It most definitly is not...')
  } else if(answerFive === 'no' || answerFive === 'n'){
    alert('Correct! Even Ryan does not know why he put in this question!')
  }
  console.log(`${userName} answered ${answerFive} for question Five`);

alert(`Thank you ${userName} for playing this simple guessing game! Take care!`)