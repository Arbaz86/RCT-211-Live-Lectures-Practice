//Booleans
let isDone: boolean = false;
isDone = true;

//Number Functions
let price: number = 10;

//String
let first_name: string = "Masai";
let last_name: string = "Scholl";
let full_name = `${first_name} ${last_name}`; //inference check form the value
console.log(full_name);

//Arrays
let arr1: number[] = [1, 2, 3, 4, 5, 6, 7];
let arr2: string[] = ["Masai", "School"];

//Object
//Pre,itive types in TypeScriop -> number, string, boolean, null, undefined,symbol and big-int

//first type of how to create an object
// type person = { first_name: string; last_name: string; age: number };

//second type of how to create an object
interface person {
  first_name: string;
  last_name: string;
  age: number;
} // creting a blue-print of an object

//using the object here
const masai: person = {
  first_name: "Masai",
  last_name: "school",
  age: 3,
};

//Tuples - Arrays
//1. The number of elements in the tuple is fixed to the number of
//2. The types of elements are known in advance

let tuple: [string, number];
tuple = ["Masai", 2];

//Enums -> Group of named constant values
enum Color {
  RED = "Red", // default value 0
  GREEN = "Green", // default value 1
  BLUE = "Blue", // default value 2
}

let greenColor = Color.GREEN;
console.log(greenColor);

//others
let u: undefined;
let n: null;
let a: any;

//function

//using normal function
// function sum(a: number, b: number): number {
//   return a + b;
// }

//using arrow function;
const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(1, 1));

//Union
//combining all the parts of type
let output: (number | string)[];

output = ["Masai", 1, "sdfdf", 3];

//Intersection
//we can combine 2 or more objects to one
