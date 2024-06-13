//SingleTone Objects

//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "29393nk"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email : "NK29@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Junkook",
            lastName : "Jeon"
        
        }  
        }
    }

    //console.log(regularUser.fullName.userFullName.firstName);

    const obj1 = {1 : "a", 2 : "b"}
    const obj2 = {3 : "a", 4 : "b"}
    const obj3 = {4 : "a", 5 : "b"}

    const obj4 = Object.assign({}, obj1, obj2, obj3)

    //console.log(obj4);
    // console.log(obj1);
    // console.log(obj2);

    //const obj4 = {...obj1, ...obj2, ...obj3}
    //console.log(obj4);

    const users = [
        {
            id : 1, 
            email: "Nk@gmail.com"
        },
        {
           id : 2,
           email: "GD@gmail.com"
        },
        {
          
        },
    ]
     users[0].email
     console.log(users[0].email);

    //  console.log(Object.keys(tinderUser));
    //  console.log(Object.values(tinderUser));
    //  console.log(Object.entries(tinderUser));
    //  console.log(tinderUser.hasOwnProperty('isLoggedIn'));




    const course ={
        courseName : "js in Hindi",
        price : "799",
        courseInstructor : "Hitesh"
    }

    //course.courseInstructor

    const {courseInstructor : grgi} = course
     console.log(grgi);