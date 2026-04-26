/**
 *Tuples in TypeScript:
 *A tuple is a fixed length array where each element has a specific type.
 *It helps in storing multiple fields of different data types together.
 */

 //Example 1: Tuple witho two values:

//  let person:[string,number] = ["Allice",25];

//  console.log(person[0]); // Output: Allice
//  console.log(person[1]); // Output: 25
//  console.log(person);


 //Example 2: Tuple with multiple values
 let user: [number, string, boolean, number, string]; //
 user = [1,"Steve", true, 20,"Admin"];

//  console.log(user)

 //Example 3:
//  for (let i=0; i < user.length; i++)
//  {
//     console.log(user[i])
//  }

 //Example 4: Iterating using a 'for in' loop
//  for (let i in user)
//  {
//      console.log(user[i])
//  }

//Example 5: "for...of"
// for (let element of user)
// {
//     console.log(element)
// }

//Example 6:

let students: [number, string][] = [[101,"Smith"],[102,"Scott"],[103,"Marry"]];

console.log(students[0][1])
console.log(students[1][1])
console.log(students[2])