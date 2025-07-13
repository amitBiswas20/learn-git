"use strict";
// class UserSimple {
//   name: string;
//   age: number;
//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }
// new UserSimple("arafat", 25);
// No need pre-define property use public/private
class UserSimple {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("My age" + this.age);
    }
}
const arafat = new UserSimple("arafat", 25);
console.log(arafat);
arafat.hobbies.push('sports');
