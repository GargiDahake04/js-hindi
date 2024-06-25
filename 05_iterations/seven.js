const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


//const newNum = myNum.map((num) => num +10)

const newNum = myNum 
                    .map((num) => num * 5)
                    .map((num) => num +25 )
                    //.map.filter((num) => num . )

console.log(newNum);