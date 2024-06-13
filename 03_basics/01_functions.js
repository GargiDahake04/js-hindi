function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("H");
    console.log("A");
    console.log("K");

}

//sayMyName()

function addNumber(number1, number2) {
    // let result =number1 + number2
    // return result

    //console.log(number1 + number2);     //print karto pn store nahi krt
    
    //return number1 + number2
}
//addNumber(5, 8)

const result = addNumber(5, 8)

//console.log("Result:" , result);


function loginUserMessage(username = "Sarthak"){

    if(!username){
        console.log("Please enter a username");
        return

    }

    return `${username} just Logged in`

}
//console.log(loginUserMessage("Gargi"));


function calculateCartPrize(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrize(2, 24, 29, 4, 96, 97, 93));

const user = {
    username: "Gargi",
    price : "Infinite"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username: "Sarthak",
    price: "Infinite"
})

const myArray =[500, 400, 300, 700, 900]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200, 400, 300, ]));