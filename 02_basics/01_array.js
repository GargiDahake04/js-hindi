const myArray = [0, 1, 2, 3, 4, 5,]

const myBts = ["Rm", "jin", "suga", "jhope", "jimin", "v", "Jk" ]

const myArray2 = new Array(1, 2, 3, 4, 5, 6)
//console.log(myArray2[0]);


//Array Methods

myArray2.push(8)     //add values at last
myBts.push(9)

myBts.pop()        //remove values from last

//console.log(myBts);


//myArray2.unshift(10)      //add value at starting 

//myArray2.shift()          //remove value from start

//console.log(myArray2);


//console.log(myArray2.includes(7));          //it shows that value is present or not and the output gives in boolean datatype
//console.log(myArray2.indexOf(3));   


const newArray = myArray2.join()             //it covert Array to string

//console.log(myArray2);
//console.log(typeof newArray);



//Slice  &   //Splice


console.log("A" , myArray2);

const new1 = myBts.slice(1,4)

console.log(myBts);
console.log(new1);
console.log("B" , myBts);

const new2 = myBts.splice(1, 4)
console.log("c" , new2);

console.log(myBts);
