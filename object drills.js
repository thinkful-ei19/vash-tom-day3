'use strict';

/* Object creator
In this drill, you need to write code for the createMyObject function so that it returns an object with the following key value pairs:

foo => 'bar'
answerToUniverse => 42
olly olly => 'oxen free'
sayHello => a function that returns the string 'hello' 
*/ 



const createMyObject = function () {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    olly_olly: 'oxen free',
    sayHello: function () {
      console.log('hello');
    }
  };
};

console.log(createMyObject());