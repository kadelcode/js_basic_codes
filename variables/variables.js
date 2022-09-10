//  variables are containers for storing data


/* ______________var KEYWORD______________ */

var x = 20; //  declaring a variable x, and assigning a value of 20 to it.

//  declaring many variables in one statement
var name = 'Kadel', age = 24, $height = "168cm";

// undefined variable (since no value is assigned to it)
var ham;

console.log(x)
console.log(name, age, $height)
console.log(ham)



/* ______________let KEYWORD______________ */
let v = "Vintage";

function my_func1() {
    let v = "Vamos"; // variables declared with "let", has a block scope.
    console.log("v(inside function) = ", v); // v = Vamos

}

my_func1()
console.log("v(outside function) = ", v); // v = Vintage



/* ______________const KEYWORD______________ */
const pi = 3.142; // const variables must be assigned a value, when they are declared

//  constant array
const names = ["Tikki", "Sosros", "Linto", "Peris"];

// constant object
const student = {Name:"Katly", Age:"12", Grade: "A"}
console.log(student.Name);