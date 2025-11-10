//Comments in JS use two foward slashes

// alert("JS IS WORKING!!");

console.log("This is a message from the app.js!");

//This is how we would declare a variable in C#
//We know that C# is a strict programming language, so we have to declare the data type
// string myName = "Karla";

//JS is a loosely typed programming language
//We use the Let prefix to declare when we would need to chage the variable later
let myString = "Ken";
let anotherString = "Martinez"; //JS will allow both single and double for strings
let myInt = 4; // This is an integer
let myBool = true; //This is a boolean
let myNull = null; //This is a null value

var oldWay = "This is the old way to create variables"; //Avoid using var

myString = "Karla";
console.log(myString);

//We can use Const to prevent reassignment of the variable
const pi = 3.14;
// pi = 4;

console.log(myInt + pi);
//JS will implicity convert data types when necessary
console.log(myString + myInt); //JS will convert the integer to a string and concatenate

console.log(myString + " " + anotherString); //Concatenation in JS
console.log(`FullNam: ${myString} ${anotherString}`); //Template literals in JS (ES6)

let myArray = [1, 2, 3, 4, "Five", true];
console.log(myArray);

let myElement = document.getElementById("myElement");
console.log(myElement);
myElement.textContent = "I changed the text from JS! ";

//this is a comment in my app js on kens branch
