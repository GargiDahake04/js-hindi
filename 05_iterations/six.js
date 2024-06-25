const coding = ["js", "rubby", "apex", "python", "c++"]

// const values= coding.forEach( (item) =>{
//     console.log(item);

//     //return item;  //we cant return when we store values in variable
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNums.filter((num) => num > 5)

// console.log(newNum);

// const newNum = myNums.filter((num) => {
//     return num > 5                            //when u open scope u have to return
// })


// const newNum = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNum.push(num)
        
//     }
// })

// console.log(newNum);



const books = [
    {title: 'Book one', genre: "Fiction", publish: 1981, edition: 2004},
    {title: 'Book two', genre: "Non- Ficion", publish: 1992, edition: 2008},
    {title: 'Book Three', genre: "History", publish: 1994, edition: 2007},
    {title: 'Book Four', genre: "Non-Fiction", publish: 1992, edition: 2010},
    {title: 'Book Five', genre: "science", publish: 1986, edition: 2014},
    {title: 'Book Six', genre: "Fiction", publish: 1995, edition: 2010},
    {title: 'Book Seven', genre: "History", publish: 1986, edition: 2004},
    {title: 'Book Eight', genre: "science", publish: 1991, edition: 2016},
    {title: 'Book Nine', genre: "Mistory", publish: 1995, edition: 2021} 
]

//const userBooks = books.filter( (bk) => bk.genre === "Fiction" )
//const userBooks = books.filter( (bk) => bk.publish > 1990 )



const userBooks = books.filter( (bk) => {return bk.publish > 1990 })    // we use multiple function usin || and &&



console.log(userBooks);
