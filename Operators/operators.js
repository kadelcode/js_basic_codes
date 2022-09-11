var x = 3;
var y = 5;
var z;

// Arithmetic Operators
z = x + y; // Addition
z = x - y; // Substraction
z = x * y; // Multiplication
z = x / y; // Division
z = x % y; // Modulus
z = x ** y; // Exponentiation

// Increment and Decrement
var u = ++x; // u = 4, x = 4 (Pre-increment)
var u = x++; // u = 3, x = 4 (Post-increment)
var u = --x; // u = 2, x = 2 (Pre-decrement)
var u = x--; // u = 3, x = 2 (Post-decrement)

// Relational Operators
x == y; // equal to
x === y; // equal value and equal type
x != y; // not equal
x !== y; // not equal value or not equal type
x > y; // greater than
x < y; // less than
x >= y; // greater than or equal to
x <= y; // less than or equal to


// Logical Operators
(x < y) && (x > y);
(x < y) || (x > y);
!(x == y);


// Assignment Operators
x = y; // x = y
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y
x %= y; // x = x % y
x **= y;// x = x ** y


// Bitwise Operators
x & y; // Bitwise AND
x | y; // Bitwise OR
~x; // Bitwise NOT
x ^ y // XOR
x << y // Zero fill left shift
x >> y // Signed right shift
x >>> y // Zero fill right shift