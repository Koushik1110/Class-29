"use strict";

//constructor function

// function Person(name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;

//   this.calcAge = function () {
//     return new Date().getFullYear() - this.birthYear;
//   };
// }

//instances
// const person1 = new Person("Tushar", 1973);
// console.log(person1.name);
// console.log(person1.birthYear);
// console.log(person1.calcAge());

// const person2 = new Person("Pollob", 1923);
// console.log(person2.name);
// console.log(person2.calcAge());

//classes
class Person {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  }
}

class Subject extends Person {
  constructor(name, birthYear, subjectName) {
    super(name, birthYear);
    this.subjectName = subjectName;
  }

  getSubject() {
    return this.subjectName;
  }
}

const person1 = new Person("Saddam", 1945);
const person2 = new Subject("Laden", 1953, "terrorism");

console.log(person1.calcAge());
console.log(person2.getSubject());
