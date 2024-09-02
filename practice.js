//1. JS Tutorial
//The JavaScript tutorial covers the basics of JavaScript programming, 
//including syntax, variables, data types, operators, and conditionals.
//-----------------------------------------------

//EX-1: Variables and Data Types
//------------------------------------------------
// Declaring variables
let Name = "John"; // String
let age = 25;      // Number
let isStudent = true; // Boolean

console.log(Name, age, isStudent); // Output: John 25 true

//EX-2: Operators
//------------------------------------------------
let x = 5;
let y = 3;
console.log(x + y); // Addition: Output 8
console.log(x * y); // Multiplication: Output 15
console.log(x > y); // Comparison: Output true


//EX-3: Conditionals
//------------------------------------------------
let time = 20;
if (time < 18) {
console.log("Good day");
} else {
  console.log("Good evening"); // Output: Good evening
}





//2. JS Objects
//JavaScript Objects are used to store collections of data and more 
//complex entities.
//-------------------------------------------------------------------

//Ex-1: Creating an Object
//--------------------------------------------------
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName()); // Output: John Doe



//Ex-2: Accessing Object Properties
//--------------------------------------------------
console.log(person.firstName); // Dot notation: Output John
console.log(person["lastName"]); // Bracket notation: Output Doe



//Ex-3: Adding a Property
//--------------------------------------------------
person.nationality = "American";
console.log(person.nationality); // Output: American








//3. JS Functions
//Functions are blocks of code designed to perform a particular task.

//Ex-1: Defining a Function
//--------------------------------------------------
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!



//Ex-2: Function Expressions
//--------------------------------------------------
const square = function(x) {
  return x * x;
};

console.log(square(5)); // Output: 25



//Ex-3: Arrow Functions
//--------------------------------------------------
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // Output: 20








//4. JS Classes
//Classes in JavaScript are templates for creating objects.
//--------------------------------------------------


//Ex-1: Creating a Class
//--------------------------------------------------

class Car {
    constructor(brand) {
        this.car_name = brand;
    }
    present() {
        return 'I have a ' + this.car_name;
    }
}

const my_Car = new Car("Ford");
console.log(my_Car.present()); // Output: I have a Ford



//Ex-2: Class Inheritance
//--------------------------------------------------

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

const myCar = new Model("Ford", "Mustang");
console.log(myCar.show()); // Output: I have a Ford, it is a Mustang








//5. JS Async
//JavaScript Async programming allows for handling asynchronous operations.
//-------------------------------------------------------------------------


//Ex-1: Promises
//--------------------------------------------------

let myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Promise resolved!");
    }, 3000);
});

myPromise.then(function(value) {
  console.log(value); // Output: Promise resolved!
});


//Ex-2: Async/Await
//--------------------------------------------------

async function myAsyncFunction() {
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve("Resolved!"), 2000);
    });
    let result = await promise;
    console.log(result); // Output: Resolved!
}

myAsyncFunction();







//6. JS HTML DOM
//JavaScript can be used to manipulate the HTML DOM (Document Object Model).
//--------------------------------------------------------------------------
//Ex-1: Changing HTML Content
document.getElementById("demo").innerHTML = "Hello JavaScript!";


//Ex-2: Changing HTML Style
//------------------------------------------------------
document.getElementById("demo").style.color = "blue";


//Ex-3: Event Handling
//--------------------------------------------------
document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");
});






//7. JS Browser BOM
//JavaScript Browser BOM (Browser Object Model) interacts with the browser.

//Ex-1: Alert Box
//--------------------------------------------------
alert("This is an alert box!");

//Ex-2: Browser Window Size
//--------------------------------------------------

console.log("Window width: " + window.innerWidth + ", height: " + window.innerHeight);

//Ex-3: Opening a New Window
//--------------------------------------------------

function openWindow() {
    window.open("https://www.example.com", "_blank");
}






//8. JS Web APIs
//JavaScript Web APIs provide access to browser and web application features.

//Ex-1: Fetch API
//--------------------------------------------------

fetch('https://api.github.com')
    .then(response => response.json())
    .then(data => console.log(data));


//Ex-2: Geolocation API
//--------------------------------------------------

navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
});







//9. JS AJAX
//AJAX allows for asynchronous data retrieval without refreshing the page.
//Ex-1: Basic AJAX Request
//--------------------------------------------------

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
}
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhttp.send();



//Ex-2: Using jQuery AJAX
//--------------------------------------------------


$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    type: "GET",
    success: function(result) {
        console.log(result);
    }
});