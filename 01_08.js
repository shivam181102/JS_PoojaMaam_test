
// 01 Variable Declararation
let myName; 
myName = "Shivam";

// 02 Data types
/* > Number
    > Null
    > Boolen
    > Object
    > String
    */

// 03 Reverse String
function reverseString(str) {
    let rev = "";
    let len = str.length-1;
    for (let i = len; i >= 0; i--) {
        rev += str[i];
        
    }
    return rev;
}
// console.log(reverseString(myName));


// 04 Conditional Statement
function conditionlStatement(num) {
    if (num%2 == 0) {
        return "Even";
    }else{
        return "Odd";
    }
}
// console.log(conditionlStatement(66));

// 05 Create An Arrays
let fruits = ["Apple", "Mango", "Pineapple"];

// 06 ForLoop 
function forLoop() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
        
    }
}
forLoop();

// 07 Calculate Area
function calculateArea(len , bre) {
    return len * bre;
}

// console.log("Area = ", calculateArea(10,5));

// 08 Create an Object
const person = {
    name : "Shivam",
    age : 21,
    city : "Navi Mumbai"
}

