const user = {
    username: "Gargi",
    price: 999,

    welcomeMessage: function () {



         console.log(`${this.username} , welcome to website`);
         console.log(this);      //shows current values
    }
   
}
 //user.welcomeMessage()
// user.username = "Sarthak"
// user.welcomeMessage()

//console.log(this);          // important note:- windows is the global object in browser



// function chai () {
//     let username = "gargi"

//     console.log(this.username);                      //we cant use 'this' in functions
    
// }
// chai()


// const chai = function () {

//     let username = "gargi"

//     console.log(this.username);                      //we cant use 'this' in functions
    
// }
// chai()

// const chai = () => {                          //Arrow Function
//     let username = "Kalyani"
//     console.log(this.username);
// }

// chai()

//*******************syntax of Arrow Function*********************** *

// const addnum = (num1, num2) => {
//     return num1 + num2                      //if we use {} then we have to return
// }


//  const addnum= (num1, num2) => num1 + num2                   //dont need to return  *implicite return


const addnum = (num1, num2) => ({username : "Gargi"})

 console.log(addnum(4, 7));