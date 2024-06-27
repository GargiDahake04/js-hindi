

// Reduce   

const myNum = [1, 2, 3, 4, 5]

// const totalNum = myNum.reduce( function (acc, currval ){
//     console.log(`acc: ${acc}, currval: ${currval}`);
// },0)


const totalNum = myNum.reduce((acc, crr) => (acc + crr), 0)

console.log(total);


const shoppingCart = [
    {
       itemName : "Js Course" ,
       price : 2599
    },
    {
        itemName : "Apex course" ,
       price : 1599
    },
    {
        itemName : "Dev course" ,
       price : 3599
    },
    {
        itemName : "Testing course" ,
       price : 1599
    },
    {
        itemName : "Apex course" ,
       price : 4899
    }
]

 const totalPay = shoppingCart.reduce( (acc, item) => acc+ item.price ,0)

 console.log(totalPay);



 const newarr = [2, 3, 5, 6, 8]

 const totalarr = newarr.reduce( (acc, curval) => acc +curval, 0)

 console.log(totalarr);



 