"use strict";

function toString() {
  return `${this.firstName} ${this.lastName}`;
}

function Student(firstName, lastName, age, isMale) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
}

function StudentPrototype() {
  this.toString = toString;
  this.sayHello = function () {
    return `${this.firstName} say 'hello'`;
  };
this.says = function(stringToSay){
    return `Студент ${this.firstName} говорит: ${stringToSay}`;
}
}

Student.prototype = new StudentPrototype();

const student1 = new Student("Vova", "Petrov", 20, true);
const student2 = new Student("Dima", "Tesaev", 16, true);
