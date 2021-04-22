"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _name;
console.log("hi");
class Person {
    constructor(name, age) {
        _name.set(this, "");
        __classPrivateFieldSet(this, _name, name);
    }
}
_name = new WeakMap();
const person = [12, 3, 4, 6, 21];
const output = `Hey my name is perrin
What is your name?
Are you from dubai or from india?`;
var P;
(function (P) {
})(P || (P = {}));
const a = 0;
const b = "0";
function reverse(x) {
    if (x < 0) {
        let output = x.toString().split("").reverse();
        output.pop();
        output.unshift("-");
        return +output.join("");
    }
    return +x.toString().split("").reverse().join("");
}
console.log(reverse(-23));
var Color;
(function (Color) {
    Color[Color["Red"] = 4] = "Red";
})(Color || (Color = {}));
const printReciept = (data) => {
    console.log(`Welcome ${data.person.name} ${data.person.age}... We 
    know where you live. Is this your address? ${data.address.location}`);
};
printReciept({
    address: { zip: 23, location: "Fairfax" },
    person: { name: "Perrin", age: 23 },
});
const mixArray = ["3", 2, 4, () => { }];
mixArray.push("sd");
const coolFun = (x, y, ...prams) => { };
class People {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
const aPerson = new People("Perrin", 23, [
    { x: "sdf", b: "ok" },
    "perrin",
    { x: "sdf", b: "ok" },
]);
//through interface chaining we are able to give the interface
//multiple interfaces to extend from that way our class can implement two
//inderectly.
class Animal {
    constructor(type, weight, alive) {
        this.type = type;
        this.weight = weight;
        this.alive = alive;
    }
    calculateBmi() {
        return this.weight; //do some logic here
    }
}
const anAnimal = new Animal("lion", 236, true);
anAnimal.type = "tiger";
console.log(anAnimal.type);
