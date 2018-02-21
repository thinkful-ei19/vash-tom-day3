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


//Object Update
function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';

  return obj;
}

// let object = createMyObject();

// console.log(updateObject(object));

//Self-reference
function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  return person;
}

let test = personMaker();
console.log(test.fullName()); // should be Paul Jones
