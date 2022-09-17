// Objects

// Initializing the car object
const Car = {type:"Lexus", model:"2020", color:"black"};

/* It's a common practice to declare objects with the const keyword */

// Initializing the student object
const Student = {
    first_name:"Pews", 
    last_name:"Jewry", 
    age:12, 
    grade:6,

    // Method in an object
    full_name : function() {
        return this.first_name + ' ' + this.last_name;
    },
};


// Access values for the car object
console.log(Car.type);
console.log(Car.model);
console.log(Car.color);

// Accessing the method in the Student object
console.log(Student.full_name());
