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

let students = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];


function makeStudentReport(data) {  // does this have to return a new array with .map??
  return data.forEach(student => {
    console.log(`${student.name} Grade = ${student.grade} `); 
  });
}


//makeStudentReport(students); //logs student and their grade


function enrollInSummerSchool(students) {
  for (let i = 0; i < students.length; i++) {
    students[i].status = 'In Summer School';
  }
  return students;
}


//enrollInSummerSchool(students);
//console.log(students);
// Find by Id

function findById(items,idNum) {
  for (let i = 0; i < items.length; i++) {
    if    (items[i]['id'] === idNum) {
      return items[i];
    }
      
  }    
}
//const data = [{ id: 1, foo: 'bar' }, { id: 2, foo: 'bizz' }];
//console.log(findById(data, 2)); // should return {id: 2, foo: 'bizz'}




//Validate object keys
// running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKey = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  let arr = Object.keys(object);

  	if(expectedKeys.length !== arr.length) {
  		return false;
  	} else {
  		return true;
  	}
  

}

//console.log(validateKeys(objectA, expectedKey));

//Object Drills Gist

//(1)
function loaf(flour,water) {
  this.flour = 300;
  this.water = 210;
}
loaf.prototype.hydration = function() {
  return (this.water / this.flour) * 100;
};
const bread = new loaf();
//console.log(bread.hydration());

//(2)
const obj = {
  foo: 'car',
  bar: 'bmw',
  fum: 'fan',
  quux: 'quiz',
  spam: 'email'
};

const loopObj = function(object) {
  for(let key in object) {
    console.log(`${key} ${object[key]}`);
  }
};

//loopObj(obj);

//(3)
const hobbitMeals = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
function fourthMeal(whoseMeals) {
  console.log(whoseMeals.meals[4]);
} 
//fourthMeal(hobbitMeals);


//(4)
const people = [
  {name: 'Superman', jobTitle: 'super hero', boss: 'Batman'},
  {name: 'Sherlock Holmes', jobTitle: 'detective', boss: 'Batman'},
  {name: 'Batman', jobTitle: 'super hero'},
  {name: 'Venom', jobTitle: 'super venom',boss: 'Batman'}
];

const superPeople = function(indiv){
  indiv.forEach(ppl => {
    console.log(`${ppl.name} ${ppl.jobTitle}`);}
  );};
	

//superPeople(people);

//(5) Properties that aren't there

const whoTheBoss = function (indiv) {
  indiv.forEach(ppl => {
    if (!ppl.hasOwnProperty('boss')) { 
      console.log(`${ppl.jobTitle} ${ppl.name} doesn't report to anybody.`);
    } else {
      console.log(`${ppl.jobTitle} ${ppl.name} reports to ${ppl.boss}.`);
    }
  });
};
//whoTheBoss(people);

//(6)

let cipher = {str: 'craft block argon meter bells brown croon droop'};

const decode = function(word) {
  if (word[0].charCodeAt() > 100) return ' ';
  return word[word[0].charCodeAt() - 96];
};

const decodeWords = function(words) {
	let arrKey = Object.keys(words);
	let word2 = words[arrKey];

  	return word2
    .split(' ')
    .map(decode)
    .join('');
};

console.log(decodeWords(cipher));

