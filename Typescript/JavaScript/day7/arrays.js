// An array is a special variable, which can hold more than one value:
// An array can hold many values under a single name, and you can access the values by referring to an index number.

// same like list 
// it stores only same type of data

// Creating an Array
// Using an array literal is the easiest way to create a JavaScript Array.

// Syntax:
// const array_name = [item1, item2, ...]; 

// const array=[10];
// array= [1,2,3]
// console.log(array[0])
// array[0]=2
// console.log(array[0])
// console.log(array.length)

// array[1]=3
// console.log(array)



const car = new Array(10)
// console.log(car.length)
car[3]="bmw"
car[9]=2
for(let i=0;i<10;i++){
    console.log(car[i])
}

console.log(typeof(car[9]))


