







// let str1:string='This is a string with single quote';
// let str2:string="This is a string with double quote";
// let str3:string=`This is a string with back tick`


// console.log(str1)
// console.log(str2)
// console.log(str3)

// let num:number=10;

// console.log("Number is:", num);
// console.log("Number is:, ${num}"); // not valid
// console.log('Number is: ${num}')  // not valid
// console.log(`Number is: ${num}`) // Number is: 10 valid


//String methods

// let str:string= "Hello, TypeScript!";

//1. length - find the length of a string (how many numbers of characters)
// console.log("Length of a string: ", str.length); //118

// //2. toUpperCase() and toLowerCase()
// console.log("Upper Case: ", str.toUpperCase());
// console.log("Lower Case: ", str.toLowerCase());

// console.log(`Original Data ${str}`)

//3. str.charAt(4)
// console.log(str.charAt(4));
// console.log(str.indexOf("H"));
// console.log(str.indexOf("Type"));

// console.log(str.substring(0,5));
// console.log(str.substring(5,100));

//5 includes(): returns true or false (boolean)
//string value is case sensitive

// console.log(str.includes("abc"));
// console.log(str.includes("TypeScript"));

//6 startswith and endswith

// console.log("startswith:",str.startsWith("Hello"));
// console.log("endswith:",str.endsWith("!"));


//7 replace()
//"Hello TypeScript"
// console.log("Replaced string:",str.replace("TypeScript","World"));
// console.log(str)

//8 split() break the string into multiple parts based on delimeter return an array

//Ex1:
// let words:string[]=str.split(" ")
// let words2=str.split(" ")


// for(let item of words)
// {
//     console.log(item)
// }


// let mystring:string="abc@gmail.com,xyzabc";
// let words:string[]=mystring.split(",");
// console.log("After splitting string:", words);
// console.log("email:",words[0]);
// console.log("password:",words[1]);


//Ex9: trim(), trimStart(), trimEnd()
// let mystring = "   welcome to typescript   ";
// console.log("Original string:",mystring);
// console.log("trim string:", mystring.trim());
// console.log(mystring.length)
// console.log("trimStart string", mystring.trimStart());
// console.log(mystring.length)
// console.log("trimEnd string:",mystring.trimEnd());
// console.log(mystring.length)



//10 concat()

// let str1 ="welcome";
// let str2 ="to typescript";
// let str3 =" and javascript";

// console.log(str1)
// console.log(str2)
// console.log(str3)

// console.log("After concatenation:", str1.concat(str2));
// console.log("After concatenation:",str1+str2);
// console.log("welcome".concat("to typescript"));
// console.log(str1.concat(str2).concat(str3));

// concept of string immutability (immutable - cannot change original)

// let num=10;
// console.log(num)
// console.log(typeof(num))

// let res=num+5;
// console.log(res);
// console.log(num);


// let str1="welcome";
// let modifiedstring=str1.concat("to typescript");
// console.log(str1); //welcome

//Multiline string with backtick ``

// let multiline:string = `welcome
//                         to typescrip`;
// console.log(multiline);

let employee = {
    name:"john",
    salary:50000,
    job:"Engineer",
    getDetails:function():string{
        //console.log(this.name,this.job,this.salary);
        return `${this.name} is a ${this.job} earning ${this.salary}`
    }
}

// console.log(typeof employee); //object
// console.log(employee.name);
// console.log(employee.salary);
// console.log(employee.job);
// console.log(employee.getDetails())
// console.log(employee["name"],employee["salary"],employee["job"]);
// console.log(employee["getDetails"]());

//2. Inline Type Object:

let student:{
    name:string,
    age:number,
    grade:string,
    getSummary: ()=>string
} =
{
    name:"scott",
    age:15,
    grade:"A",
    getSummary: function()
    {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }
}

console.log(student.getSummary());
console.log(student["getSummary"]());
console.log(student.name);
console.log(student["name"]);
console.log(student.age);
console.log(student["age"]);
console.log(student.grade);
console.log(student["grade"]);