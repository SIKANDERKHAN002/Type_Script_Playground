




// let names:string[]=[]

// names[0]="Johne"
// names[1]="Sumit"
// names[2]="Kumar"
// names[3]="Pankaj"
// names[4]="Jerry"
// names[5]="Rock"

// console.log(names)

// let posts:string[] = ["Tester","Developer","DataAnalyst","Security","BA"]

// console.log(posts)


// Approach 2: Using the generic Array<T> type


let empNames:Array<string>=["John","Smith","Peter","Scott"];
let empIds: Array<number>=[102,102,103,104];
let data:Array<string | number>=["john","Smith","Peter","Scott"]
let mixedData:Array<any>=[1,"John",true,null]

// console.log(empNames);
// console.log(empNames[1]);
// console.log(empNames[2]);
// console.log(empNames[3]);

// console.log("Size of an array:",empNames.length);

// console.log("Employee Names......")


// for(let i=0;i<empNames.length;i++)
// {
//    console.log(empNames[i])
// }

//Example 2: Iterating using the for in loop (indexes)

// console.log("Employee Ids.....")
// for(let i in empIds)
// {
//     console.log(empIds[i])
// }

// console.log("<----------- Before After ------------>")
// for(let value of empIds)
// {
//     console.log(value)
// }


//Search an element in an array using function

// function search(ele:number, arr:number[]):boolean
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]===ele)
//         {
//             return true;  // Element found
//         }
//     }
//     return false;
// }

// let arr:number[]=[10,20,30,40,50];
// console.log(search(30,arr));    //true
// console.log(search(100,arr));   //false


//Example 5: A function takes an array and return an array

function capitalizewords(arr:string[]):string[]
{
    let result:string[]=[];
    for(let i=0;i<arr.length;i++)
    {
        result[i]=arr[i].toUpperCase();
    }
    return result;
}

let words:string[]=["hello","world","TypeScript"]
console.log(capitalizewords(words));