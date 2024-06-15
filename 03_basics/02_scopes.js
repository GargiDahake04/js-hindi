
//var c = 300
let b = 300

if (true) {
    
const a = 10
let b = 20
var c = 30        //var variable can access outside the block scope nd it may causes error 

console.log('Inner:', b);

}
// console.log(a);
//console.log(b);
//console.log(c);



function one () {

    const username = "Gargi"

    function two (){
        const website = "youtube"
        console.log(username);

        
    }
    //console.log(website);

    two()

}
     //one()



   if(true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website );
        
    }
    //console.log(website);
   }  

   //console.log(username);


   //****************************Intresting********************

   console.log(addOne(5));              //we can execute function before or after
   function addOne(num) {

    return num + 1
    
   }

   
    //console.log(addTwo(5));           //we cant initialize variable before 
    const addTwo = function(num) {
    return num + 2
    
   }

   addTwo(5)