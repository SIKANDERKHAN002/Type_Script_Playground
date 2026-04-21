//// Arrow Functions/Lambda Function

/* Lambda refers to anonymous functions in programming.
   Lambda functions are a concise mechnaism to represent anonymous functions.
   These functions are also called as Arrow functions.

 These are 3 parts to a Lambda function.
 
 1.Parameters - A function may optionally have parameters
 2.The fat arrow notation/lambda notation (=>) - it is also called as the "goes to operatior".
 3.Statements - represent the functions instruction set

  Syntax:
  let variable = (parameters) =>
  {
    //block of code 
  }
  variable();
*/

// Example1: Arrow Function with no parameters and no return types.

// let greet=():void =>
// {
//     console.log("Hello Type Script");
// }

// greet()


//Example 2: Arrow Function with Parameters and a return type

// let add=(a:number,b:number):number =>
// {
//     return a+b;
// }

// console.log(add(10,20))


//Example 3: Arrow Function with implicit return

// let add=(a:number,b:number):number => a+b;
// console.log(add(10,99))

// let multiply=(a:number,b:number):number => a*b;
// console.log(multiply(10,10))

//Example 4: Arrow Function with optional parameters

// let displayDetails=(id:number,name:string,mailId?:string): void =>
// {
//     console.log("ID:",id)
//     console.log("Name:",name)
//     if(mailId !== undefined)
//     {
//         console.log("Email:",mailId);
//     }
// }

// displayDetails(123,"Scott","scott@gmail.com");
// displayDetails(123,"Scott");


//Example 5: Arrow Function with default parameters

// let calculateDiscount=(price:number, rate:number=0.50):void =>
// {
//     let discount:number=price*rate;
//     console.log("Discount Amount:",discount)
// }

// calculateDiscount(1000,0.30);
// calculateDiscount(1000)


//Example 6: Arrow Function with rest parameters

let findElements=(...elements:(number | string)[]):number =>
{
    return elements.length;
}    

console.log(findElements(3,"john",2,1,"scott"));
console.log(findElements(10,20,30,40,50,60,70));
console.log(findElements("abc","xyz"));