// 12 Scope
let a = 56; // global variable

function scope() {
    let c = 25; // Private variable
}
// c cannot be accessed here as it is limite to  the scope of function scope()

// 13 Array Method
let array = [12,25,68,24];
array.shift();
array.push(5);
// console.log(array);

// 21 Array iteration

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
    }
    return sum;
}
// console.log(sumOfArray(array))

// 22) String Methods
// Substring() - In this negative number are treated as 0
let fruits1 = "Apple , Kiwi , Banana";
console.log(fruits1.substring(5,13));
// substr() - It starts from the position and till how much length we wnt the string 
console.log(fruits1.substr(4 , 5));
// slice() - creates a new array , origibal is not modified
let fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let newFruits = fruits2.slice(1, 5);
console.log(newFruits);

// 23 Duplicate Value
const arr8 = [12,15,45,36,15,45,53];
function duplicateValue(arr) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if(ans.includes(arr[i])){
            continue;
        }else{
            ans.push(arr[i]);
        }
        
    }
    return ans;
}
// console.log(duplicateValue(arr8));

// 24 String Concatenation
function ConcatenateString(str1 , str2) {
    return str1.concat(" ",str2);
}

// console.log(ConcatenateString("Shivam","Devhare"))

// 25 Sort An Array
const arr9 = ["Mango", "Pineapple","Apple"];
// console.log(arr9.sort());

// 26 String Searching
function strContains(str1, str2) {
    // let str="";
    return str1.includes(str2)
}
// console.log(strContains("Hello World","Worle"));

// 27 Array Filtering
function filteringArr(arr) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 != 0) {
            ans.push(arr[i]);
        }    
    }
    return ans;
}
// console.log(filteringArr(arr8));

// 28 Type Casting
let str3 = "45";
let num3 = parseInt(str3);
// console.log(typeof num3);

// 29 Array Joining
function arrJoining(arr) {
    return arr.join(" ");
}
// console.log(arrJoining(arr9));

// 30 String Validation
function strValidation(str6) {
    if (str6.includes("@")) {
        let str10 = str6.split("@");
        if (str10[1].includes(".com")) {
            return true;
        }
    }
    return false;
}
console.log(strValidation("abcdef@xyz.com"))