//TS is statically typed programming language

/*
1) Premitive Data Types(Build-in)
   1.Number
   2.String
   3.Boolean
   4.Null
   5.Undefinied
   6.Any
   7.Union
   8.Void 
 
2) Non-Primitive Data Types(Objects)
   1.Array
   2.Class
   3.Function
   4.Interface
   5.Touple ...etc
   
   // let data:number=10 //number

// data = "Ten"; //compile time error

// console.log(data)

// let num11:string="5";
// let num21:number=3;

// let result=num11+num21
// console.log(result);

// let n1:string= "5"
// let n2:number=  9

// let result = n1+n2
// console.log(result)


// let age:number=25
// let price=25.5
// let big=4234234234

// console.log("Age:",age);
// console.log("Price:",price);
// console.log("Big Number",big);

// console.log(typeof(age))
// console.log(typeof age)


// let firstName:string="john"
// let lastName:string='kenedy'

// let greeting:string=`Hello ${firstName} ${lastName}`;
// console.log(greeting);
// console.log("Hello",firstName,lastname)


// 3. BOOLEAN TYPE
// Represents true/false values

// let isStudent:boolean=true;
// let hasJob:boolean=false;

// console.log("Is Student?", isStudent);
// console.log("Has Job", hasJob);


//4. NULL & UNDEFINED
// Special types for absence of value

// let emptyValue:null=null;
// let notAssigned:undefined=undefined;

// console.log(emptyValue)
// console.log(notAssigned)

// let price:number;
// console.log(price); //undefined


//5. ANY TYPE
//loses TypeScript benefits

// let value:any="welcome"
// console.log(typeof(value))

// value=100;
// console.log(typeof(value))

// value=true;
// console.log(typeof(value))

// console.log(value)

//6. UNION TYPE - Combine multiple types

// let id:number | string | boolean;

// id='ABC123';
// console.log(id);

// id=123456


// function sum():void 
// {
//     console.log(10+20)
// }
// sum()

// function sum1()
// {
//     console.log(10+20)
// }
// sum1()

// function sum():number
// {
//     return(10+20);
// }

// console.log(sum())

// 7. VOID TYPE
// Used for function that don't retunr anything


// function show():void
// {

//     console.log("Welcome");

// }

// show()

// function sum(x:number,y:number):number
// {
//      return(x+y);
// }

// console.log(sum(10,20));