//var, let, const

// var age = 99
// console.log(age)


//Example 1: var (Functional Scope)

function varScope()
{

if(true)
   {
      var msg = "Hello World"
    //   console.log(msg) 
    }
    console.log(msg)
}

// varScope()


// // Example 2: let and const (Block Scope)

// function blockScope()
// {
//     if(true)
//     {
//         console.log("<-- From Block Scope -->")
//         let msg="Hello World"
//        const greet = "Hello Const"
//     //    console.log(msg)
//     //    console.log(greet) 

//     }
//      console.log(msg)
//      console.log(greet)
// }

// blockScope()


function scopeDiff()
{
     if(true)
     {
        var num1=10
        let num2=20
        const num3 =30
        console.log(num1)
        console.log(num2)
        console.log(num3)
     }
     
     console.log(num1) // can acccess functional
     console.log(num2) // can not access - block
     console.log(num3) // can not access - block
}

// scopeDiff()


// 2) Declaration/Value Assignment

//Example1: var can declared without initialization
// var x;//declaration
// console.log(x) //undefined
// x=30 //initialization
// console.log(x);

// Example2: let can be declared without initialization

// let y; //declaration
// console.log(y);
// y=30
// console.log(y)

//Example 3: const must be initialized at the time of declaration
//const z; // incorrect 
// const z=99; //correct
// console.log(z);


//3) Re-declaration
//var - allows the Re-declaration
//let and cont not allows the Re-declaration (making code safer)

//Example 1: var allows the re-declaration
// var city="New York"
// var city="Los Angeles"
// console.log(city)

//Example2: let - not allowed re-declaration

// let country="India"
// let country="US"
//console.log(country);

//Example3 : const - not allowed re-declaration
// const planet="Earth";
// const planet="Mars";
// console.log(planet)

//4) Re-initialization/Re-assignment
//var and let - Re-assignment allowed
//const - Re-assignment not allowed (only constants allowed = can not change the value)

//Example 1: var allows re-assignment 

// var age=25;
// age=30; //allowed
// console.log(age);

//Example 2: let allows re-assignment
// let age=25;
// age=99; //allowed
// console.log(age);


// const age=25
// age=30 //Not allowed
// console.log(age);