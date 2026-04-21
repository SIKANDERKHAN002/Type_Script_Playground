//Example1: Named function with no parameters and no return type

// function display():void
// {
//     console.log("Welcome to type script");
// }

// display()

//Example2: Named function with parameters and return type

// function addNumbers(x:number,y:number):number
// {
//     return x+y;
// }

// // console.log(addNumbers(10,20))

// let result:number=addNumbers(2,3);
// console.log(`This is result ${result}`)


//Example3: Named parameters with rest 

// function addSum(...nums:number[])
// {
//    let i:number;

//    let sum:number=0;

//    for(i=0;i<nums.length;i++)
//    {
//      sum = sum+nums[i]

//    }
//    console.log(sum)
// }

// addSum(10,20);
// addSum(10,20,30);
// addSum(10,20,90,100);

//Example 4: Named function with Rest parameters - multiple types

// function findElements(...elements:(number | string)[]):number
// {
//     return elements.length;
// }

// console.log(findElements(3,"john",2,1,"scott"));
// console.log(findElements(10,20,30,40,50,60,70));
// console.log(findElements("abc","xyz"));

//Example 5: Named function with optional parameters

// function displayDetails(id:number, name:string,mailId?:string): void
// {
//     console.log("ID:",id)
//     console.log("Name:",name)
//     if(mailId !==undefined)
//     {
//         console.log("Email:", mailId)
//     }
// }

// displayDetails(123,"Scott","scot@gmail.com");
// displayDetails(123,"Scott");


// Example 6: Named function with default parameters

// function calculateDiscount(price:number, rate:number=0.50):void
// {
    
//     let discount:number=price*rate;
//     console.log("Discount Amount:", discount)

// }

// calculateDiscount(1000,0.30);
// calculateDiscount(1000);