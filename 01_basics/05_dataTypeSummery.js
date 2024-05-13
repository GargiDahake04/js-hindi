//Primitive DataTypes
// 7 Types :- String, Number, Boolean, Null, Undefined, BigInt, Symbol

const score = 100
const scoreValue = 100.25
const isLoggedIn = false
const Temp = null
let userEmail;


const id = Symbol ("123")
const anotherId = Symbol ("123")

//console.log(id === anotherId);

const bigNumber = 2345788888n



//Referance (Non Primitive)

//Array, Object, Functions

const heros = ["RM", "Jin", "Suga", "JHOpe", "Jimin", "V", "JK"];

let myObj ={
     name : "Gargi",
     age : 22,
}

const myFunction = function(){

    //console.log("Hello world");
}
 
//https://262.ecma-international.org/5.1/#sec-11.4.3










//****************************************************Stack and Heap*****************************************

//  *Stack (Primitive)     *Heap(Non Primitive)


let email= "Gargi@Gmail.com"
let anothrEmail = email

anothrEmail= "Kallu@gmail.com"

//console.log(email);
//console.log(anothrEmail);



let userOne ={
    email : "Srk@gmail.com",
    upi : "user@ybl",
}

let userTwo = userOne

userTwo.email = "Niro@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



