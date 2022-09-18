// Initializing a string
let string1 = "JavaScript is fun!"

/*******************
 * length() - return the length of a string */
console.log(string1.length) // returns 18

/* ___________String Parts____________ */

/* slice() method */
string1.slice(0,10) // returns JavaScript


/* substring() method */
x = string1.substr(0,4) // returns Java
console.log(x)


/*******************
 * replace() - replaces a specified value with another value in a string */
let text = "Java is a good programming language";
let new_text = text.replace("Java", "JavaScript")
console.log(new_text)



/*******************
 * toUpperCase() - Converts a string to uppercase
 * toLowerCase() - Converts a string to lowercase*/
upper_case = text.toUpperCase();
lower_case = text.toLowerCase();
console.log(upper_case)
console.log(lower_case)



/******************* 
 * concat()- joins two or more strings */
let text1 =  "Hi"
let text2 = "John"
let text3 = text1.concat(' ', text2)
console.log(text3)


/******************* 
 * trim()- removes whitespace from both sides of a string */
let text_with_spaces = "  I love beans    "
let text_with_no_spaces = text_with_spaces.trim()
console.log(text_with_no_spaces)



/******************* 
 * split()- converts a string to an array */
let text_arr = text.split(" ")
console.log(text_arr)