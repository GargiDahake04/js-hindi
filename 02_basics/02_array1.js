const hyungLine = ["RM", "Jin", "suga", "jhope"]
const maknaeLine =["Jimin", "v", "Jk"]

//hyungLine.push(maknaeLine)

console.log(hyungLine);


const bts =hyungLine.concat(maknaeLine)

console.log(bts);

const allMembers= [...hyungLine, ...maknaeLine]

console.log(allMembers);


const num = [1, 2, 3, [4, 5, 5], 7, 6, [8, 9, [1, 2],7]]

const realnum =num.flat(Infinity);

console.log(realnum);



console.log(Array.isArray("Gargi"));
console.log(Array.from("Gargi"));
console.log(Array.from({name: "Gargi"})); //Intresting


let score1 =100
let score2 =200
let score3 =300


console.log(Array.of(score1, score2, score3));