'use strict;'

console.log('hey world');

let userName = prompt ('What is your name?');
alert(`Welcome ${userName}! Please play my guessing game`);

let answerOne = prompt('Do I have a cat?').toLowerCase();

// .toLowerCase will make it accept all lower case inputs 
// .toUpperCase must have yes no answers be all capitals

if(answerOne === 'yes' || answerOne === 'y'){
  alert ('Yes I do have a cat')
} else if(answerOne === 'no' || answerOne === 'n'){
  alert('Sorry you are incorrect')
}

// acp files individually for to make commenting on a commit easier and cleaner

