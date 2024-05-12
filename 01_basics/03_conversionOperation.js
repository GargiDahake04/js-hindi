let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let value = Number(score)
console.log(typeof value);
console.log(value);


//"33" => 33
//"33abc" => NaN
//Null => 0
//True => 1 ; False => 0
//Undefined => NaN

let isLoggedIn= 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

//1 => True; 0 => False
// "" => False
//"Gargi" => True