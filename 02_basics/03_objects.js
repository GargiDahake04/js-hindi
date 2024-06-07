// singletone

//object Literals

const mySym = Symbol("key1")

const jsUser ={
    name: "Gargi",
    [mySym] : "myKey2",
    age: 22,
    location : "Bhandara" , 
    email: "GargiD5@gmail.com" ,
    isLoggedIn : false,
    lastLoginDays: ["Monday", "saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);


jsUser.email = "GargiDahake@gmail.com"
//Object.freeze(jsUser)

jsUser.email= "SarthakB@gmail.com"

//console.log(jsUser["email"]);

jsUser.greeting = function() {

    console.log("Hello JS User");
    
}

jsUser.greetingTwo = function() {

        console.log(`Hello JS User, ${this.name}`);

}

   console.log(jsUser.greeting());
   console.log(jsUser.greetingTwo());