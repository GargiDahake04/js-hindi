let myDate = new Date()


//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toJSON());
//console.log(myDate.toISOString());
//console.log(myDate.getDate());
//console.log(myDate.getDay());
//console.log(myDate.getFullYear);
//console.log(myDate.getMonth()+1);   //month start with 0
//console.log(myDate.getMonth().toString());  //always show in number formate



let closedDates = new Date(2021, 4, 24)

//console.log(closedDates.toString());

//let closedDate = new Date(2021, 4, 24, 3, 15)

//let closedDate = new Date("2021-04-24")
//let closedDate = new Date("04-24-2021")
//console.log(closedDate.toLocaleString());



let myTimeStamp = Date.now()
//console.log(myTimeStamp);

//console.log(Date.now()/1000)

//console.log(Math.floor(Date.now()/1000));

//console.log(Date(myTimeStamp).toLocaleString());

let newDate = Date.now()

newDate.toLocaleString('default' , {

    weekday: "long",


})



