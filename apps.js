// The variable 'name' is given the value of the string "Matthew"
let name = "Matthew";
// The constant 'usStateCount' is given the value of the number "50"
const usStateCount = 50;
// The variable 'x' is given the value of the number result from the equation adding 5 and 4 together
let x = 5 + 4;

/* 
str.charCodeAt(#) converts the letter that is in the postion
 stated by the argument to ASCII Code, which is a number.
 So we can check where the number is relative to the letter
 that is being checked. In this case we are looking for where
 the letter checked is relative to the letter "L", who's ASCII
 code equivalent is "76". The letter being checked is the letter
 "M" who's ASCII code equivalent is "77". Therefore, the first 
 function would run and pop up an alert saying, "Back of the line".
 After the first function is ran, the second will not run because
 the parameters of the first were already met, and would only run
 if the first parameter had not been met.
*/

function checkName() {
    if (name.charCodeAt(0) > 76) {
        alert("Back of the line!");
 } else {
  alert("Next!");
    }
};

// This is a Line Comment used to leave a decription of what the code is meant to do

/*
This is a Block Comment that is used the same as a Line Comment, but 
can span across multiple lines and therefore can be more useful when 
you may need to go more in depth about a section of code, or even
for cleaner looking formatting so you don't have one long snaking line of
text.
*/


// This function creates an alert that says "Hello World!"
function sayHello() {
    alert("Hello World!");
};

// This calls forward the action stored within the function and logs it to the console
sayHello();

/*
The function takes two arguments, one for a name, and one for an age. Then
it compares the age to the parameters set to 21, if the age argument given
is 21 or more, nothing happens, but if the age argument is less than 21, then
an alert will pop up using the arugment provided for name to say, 
"Sorry [name argument inserted here], you aren't old enough to view this page!"
*/
function checkAge(name, age) {
     if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
};

/*
Here we call upon the 'checkAge(#, #)' function with the provided arguments.
'Charle' and 'Abby' both have an age argument of 21 or above and therefore 
will not trigger the function to set off the alert. However, 'James' and John' 
have age arguments that are less than 21 and will then trigger the function and 
set off the alert with their respective name argument inserted into it.
*/
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

// An array value assigned to a variable
let favoriteVegetables = ["Cucumber", "Cabbage", "Corn"];

/*
A loop is ran as many times as there are items in the array, because we set 
the max number equivalent to one less than the length of the array with 
'favoriteVegetables.length' and set the starting value, 'v', as the first item in 
the array which is represented by '0'. Then we have it incrementing by 1 every 
time it runs to log each seperate value within the array on the console until told 
to stop.
*/
for (v = 0; v < favoriteVegetables.length; v++) {
    console.log(favoriteVegetables[v])
};

/*An array consisting of 5 different object with each have two varibles, 'Name'
and 'Age' to be called upon or used as arguments.
*/
let persons = [
    {Name: "John", Age: 21},
    {Name: "Paul", Age: 25},
    {Name: "Matthew", Age: 25},
    {Name: "Alex", Age: 17},
    {Name: "Jessica", Age: 20}
];
/*Much like the loop used for 'favoriteVegetables' except the array starting 
position value here is represented by 'i' and instead of logging the contents
of the array to the console, we are instead running the array's inner object 
values through the 'checkAge(#, #)' function from earlier, but we must specify
that this time when it's run it will need to use the arguments specific to the
'persons' array. We achieve this by using the array as the argument along with
its position value representative, 'i', as well as calling upon the specific
classes to be used as the argument itself, which looks like this when applied,
'checkAge(persons[i].Name, persons[i].Age)'.
*/
for (i = 0; i < persons.length; i++) {
    checkAge(persons[i].Name, persons[i].Age);
};

/* 
This creates a function that returns the number length of a given argument's 
characters
*/
function getLength(word) {
    return word.length;
};

//This places the argument 'Hello World' into the 'getLength(#)' function
let length = getLength("Hello World");

/*
Here we have a function that is meant to check if a number of characters of a
given argument returned from the 'getLength(#)' function is even or odd. 
This is achieved by dividing the number in half and checking to see if there
is a remainder, which is done by using the modulus operator '%'. Then based
on wheather or not there is a remainder (no remainder means it's even, and a 
remainder means it's odd) the function if/else statement decides which function
to run.
*/
function isEven(wordlength) {
    if (wordlength % 2 == 0) {
        console.log("The world is nice and even!");
    } else {
        console.log("The world is an odd place!");
    }
};

//We call upon the the function to make it run, otherwise it would not.
isEven(length);