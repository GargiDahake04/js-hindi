// for of

//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
    
}

const greetings = "Hello Gargi"

for (const greet of greetings) {
    if (greet == " ") {

         continue;
        }
    console.log(`Each char is ${greet}`);
    
}


// Maps

const map = new  Map()
map.set('RM', "Kim namjoon")
map.set('JIN', "Kim SeokJin")
map.set('JIMIN', "Park Jimin")
map.set('JHOPE', "jUNG sehyok")
map.set('V', "Kim Tae Hyung")
map.set('JK', "Jung Junkook")
map.set('SUGA', "Min Yoongi")


//console.log(map);


for (const [key , value] of map) {

    console.log(key, ':-', value);
    
}

// const muObject = {                                    //object are not iterable in for of
//     'game1' : 'PUBG',                                    
//     'game2' : 'SUBWAY SURF'
// }
//    for (const [key , value] of muObject  ) {
//        console.log(key, ':-', value);
//    }