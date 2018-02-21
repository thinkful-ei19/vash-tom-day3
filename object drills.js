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
const updateObject = function(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';

  return obj;
};

// let object = createMyObject();

// console.log(updateObject(object));


//Self-reference
const personMaker = function() {
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
};

// let test = personMaker();
// console.log(test.fullName()); // should be Paul Jones



//Key Deleter 
function keyDeleter(obj) {

  delete obj.foo;
  delete obj.bar;

  return obj;

}

var sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

//console.log(keyDeleter(sampleObj));

//Objects drills 2
// Make student reports

const students = [
  {
    name: 'Tim',
    grade: 'B',
  },
  {
    name: 'Sue',
    grade: 'A',
  }
];


function makeStudentReport(data) {  // does this have to return a new array with .map??
  return data.forEach(student => {
    console.log(`${student.name} Grade = ${student.grade} `); 
  });
}


//makeStudentReport(students); //logs student and their grade