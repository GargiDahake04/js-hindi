const score = 400

const balance = new Number(200)

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num =122568.2688    //1.226e+5     greater than 5 asel tr +1 hoil ani jitke digits uralele aahet tyacha "e+no.of digit" yeil
console.log(num.toPrecision(4));


const othrNum =122.345 // 122.35     greater than 5 asel tr +1 hoil...
console.log(othrNum.toPrecision(5));



//************************************************Math*****************************


//console.log(Math);
//console.log(Math.abs(-5));    //convert -ve value to +ve    and   +ve to +ve

//console.log(Math.round(4.6)); // consider roundfig value   ex:- 4.6= 5 or  4.3= 4

//console.log(Math.ceil(4.5)); //consider upper value  ex:- 4.5 =5 ,  4.2= 4

//console.log(Math.floor(4.2));  //consider lower value  ex:-  4.2 = 4 , 4.7= 4

//console.log(Math.min(2, 6, 4, 8));
//console.log(Math.max(4, 9, 5, 2));

//console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10)+ 1 );


const min = 10
const max = 20

//console.log(Math.floor(Math.random()*(max-min + 1)) +min);


//console.log(Math.floor(Math.random()*1000000)+ 1 );   for 6 digit output