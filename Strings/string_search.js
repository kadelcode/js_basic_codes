let x = 'Hellooo JavaScript';
let y = 'JavaScript is a very good programming language!'
/** indexOf() - returns the position of the first occurrence of a specified text in a string */
x.indexOf('o'); // returns 4

/** lastindexOf() - returns the index of the last occurrence of a specified text in a string */
x.lastIndexOf('o') // returns 7

/** search() - searches a string for a specified value and returns the position of the match */
y.search('programming'); // returns 26

/** startsWith() - returns true if a string begins with a specified value, otherwise false */
y.startsWith('Java') // returns true
y.startsWith('Java',1) // returns false, because J position is 0 not 1

/** endsWith() - returns true if a string ends with a specified value, otherwise false */
y.endsWith('e') // returns false because variable y ends with '!' not 'e'
e = x.endsWith('l',4) // check the first three characters if it ends with 'l'

console.log(e)