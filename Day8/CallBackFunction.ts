//A callback function : A function passed as an argument to another function and executed later.


// function greet(data:string,data1:string,callback:(mess:string) => void)
// {
//      console.log(`${data1}`)
//      console.log(`This is from greet ${data}`);
//      callback(`${data}`); 

// }

// function showMessage(msg:string)
// {
//     console.log("This is from show message",msg)
// }


// greet("HAPPY DAY","TULLA",showMessage)


//Example2:




function sum(num1:number,num2:number,callback:(result1:number)=>void)
{

    let resultTotal:number = num1+num2
    callback(resultTotal) 
}


function showResult(result:number):void
{
    console.log(`The result from showResult ${result}`)
}

sum(100,200,showResult)