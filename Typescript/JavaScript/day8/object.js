// there are two ways to declare object
// literal
// constructor

// literal

// const profile = {
//     name : "Ahmed",
//     age : 13,
//     school: "amaroo secondary school, aus",
//     nationality : "AUS",
//     salary : "10$",
//     profession : "young software engineer"
// }

// console.log(profile["age"])
// console.log(profile.age)
// console.log(profile.school)

// change
// profile.age=14
// console.log(profile)


// sal= 30

// function salary(){
//     return sal * 30 
// }
// const profile = {
//     name : "Ahmed",
//     age : 13,
//     school: "amaroo secondary school, aus",
//     nationality : "AUS",
//     salary : salary(),
//     profession : "young software engineer"
// }

// console.log(profile)

// const profile = {
//     name : "Ahmed",
//     age : 13,
//     school: "amaroo secondary school, aus",
//     nationality : "AUS",
//     salary : 300 + "$",
//     profession : "young software engineer"
// }

// console.log(profile)


// const profile = {
//     name : "Ahmed",
//     age : 13,
//     school: "amaroo secondary school, aus",
//     nationality : "AUS",
//     salary : 300 + "$",
//     profession : "young software engineer"
// }
// Object.freeze(profile)

// console.log(Object.isFrozen(profile))
// console.log(Object.isExtensible(profile))
// profile.status = "student"
// profile.age=14
// console.log(profile)


// const profile = {
//     name : "Ahmed",
//     age : 13,
//     school: "amaroo secondary school, aus",
//     nationality : "AUS",
//     salary : 300 + "$",
//     profession : "young software engineer",
//     loginTime :  new Date()
// }

// console.log(profile)


// const profile = {
//     name : "Ahmed",
//     age : 13,
//     school: "amaroo secondary school, aus",
//     nationality : "AUS",
//     salary : 300 + "$",
//     profession : "young software engineer",
//     loginTime :  new Date()
// }
// delete key word is used for deleting the proporty of the object
// delete profile.age  
// console.log(profile)




// const profile = {
//     name : "Ahmed",
//     age : 13,
//     school: "amaroo secondary school, aus",
//     nationality : "AUS",
//     salary : 300 + "$",
//     profession : "young software engineer",
//     loginTime :  new Date(),
//     desc : function(){
//         return `name is ${this.name} , his age is ${this.age}, he is an ${this.nationality} national`
//     }
  
// }

// console.log(profile)
// console.log(profile.desc())