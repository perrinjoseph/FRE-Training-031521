console.log("hi");
class Person {
  #name = "";
  constructor(name: string, age: number) {
    this.#name = name;
  }
}
const person: number[] = [12, 3, 4, 6, 21];
const output: string = `Hey my name is perrin
What is your name?
Are you from dubai or from india?`;

enum P {}
const a: number = 0;
const b = "0";

function reverse(x: number): number {
  if (x < 0) {
    let output = x.toString().split("").reverse();
    output.pop();
    output.unshift("-");
    return +output.join("");
  }
  return +x.toString().split("").reverse().join("");
}

console.log(reverse(-23));

enum Color {
  Red = 4,
}

interface data {
  address: { zip: number; location: string };
  person: { name: string; age: number };
}

const printReciept = (data: data): void => {
  console.log(`Welcome ${data.person.name} ${data.person.age}... We 
    know where you live. Is this your address? ${data.address.location}`);
};

printReciept({
  address: { zip: 23, location: "Fairfax" },
  person: { name: "Perrin", age: 23 },
});

const mixArray: (string | number | Function)[] = ["3", 2, 4, () => {}];
mixArray.push("sd");

const coolFun = (x: string, y: number, ...prams: number[]) => {};

interface PersonInterface {
  name: string;
  age: number;
  //Just to understand how the union and array types work.
  hobbies: ({ x: string; b: string } | string)[];
}

class People implements PersonInterface {
  name: string;
  age: number;
  hobbies: ({ x: string; b: string } | string)[];

  constructor(
    name: string,
    age: number,
    hobbies: ({ x: string; b: string } | string)[]
  ) {
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

interface AnimalInterface extends X {
  type: string;
  weight: number;
  calculateBmi(): number;
  readonly alive?: boolean;
}

interface X {
  american?: string;
}
//through interface chaining we are able to give the interface
//multiple interfaces to extend from that way our class can implement two
//inderectly.
class Animal implements AnimalInterface {
  type: string;
  weight: number;
  readonly alive: boolean; //this rea only property is only from typescript.

  constructor(type: string, weight: number, alive: boolean) {
    this.type = type;
    this.weight = weight;
    this.alive = alive;
  }

  calculateBmi(): number {
    return this.weight; //do some logic here
  }
}
let anAnimal;

const btnType = "primary";
const btnSize = "lg";

let doubleBandtest = {
  ["btn-yo"]: true,
  ["btn-hi"]: !!anAnimal,
};
console.log(">>>", doubleBandtest);

type ClassNamesArguments = string | { [aKey: string]: boolean };
const classNames = (...args: ClassNamesArguments[]): string => {
  let output: string[] = [];
  args.forEach((el, arr) => {
    if (typeof el === "string") {
      output.push(el);
    } else {
      if (Object.keys(el).length > 0) {
        const allkeys: string[] = Object.keys(el);
        allkeys.forEach((val, arr) => {
          if (el[val] === true) {
            output.push(val);
          }
        });
      }
    }
  });
  return output.join(" ");
};

const response = classNames("btn", {
  ["btn-default"]: true,
  ["btn-lg"]: true,
});
console.log(response);
