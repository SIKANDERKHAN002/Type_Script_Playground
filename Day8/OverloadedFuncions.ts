//Step1: write a signature of functions
//Step2: implement a function
//Step3: calling function


//Example1: Different parameter types(data types)

// function getInfo(id:number):string;
// function getInfo(name:string):string;


// function getInfo(param: number | string ):string
// {
    
//          if(typeof param==="number")
//          {
//             return(`User ID is ${param}`)
//          }
//          else
//          {
//               return(`User Name is ${param}`)
//          }

// }

// console.log(getInfo(101))
// console.log(getInfo("Sumit"))


// function add(a:number,b:number):number;
// function add(a:number,b:number):number;

// function add(a:number,b:number,c?:number):number
// {
//      if(c!==undefined)
//      {
//         return a+b+c;
//      }
//      return a+b;

// }

// console.log(10,20);
// console.log(10,20,30);


// function processInput(input:string):string;
// function processInput(input:number):number;

// function processInput(input :string | number): string | number
// {
//     if(typeof input==="string")
//     {
//         return input.toLowerCase();
//     }
//     else
//     {
//         return input*3;
//     }
// }

// console.log(processInput("Welcome"))
// console.log(processInput(5))

function greet(name:string):string;
function greet(age:number):string;
function greet(isMarried:boolean):string;

function greet(value:string | number | boolean):string
{
   if(typeof value==="string")
   {
      return `Hello ${value}`;
   }
   else if(typeof value==="number")
   {
    return `You are ${value} years old`
   }
   else
   {
     let res:string= value?"married":"single"
     return res 
    
   }

}

console.log(greet("John"))
console.log(greet(30))
console.log(greet(true))
console.log(greet(false))