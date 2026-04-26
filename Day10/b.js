"use strict";
// let age1:number = 30;
// let name1:string = "john"
// age1 = "thirty"
// console.log(age1)
// function show(){
//    var price:number=100.00
//    console.log(`This is price ${price}`)
//    if (true) {
//      var item = "icecream"
//      console.log(`This is from inside if block ${price}`)
//    }
//    console.log(item)
// }
// show()
// function exampleVar() {
//  if (true) {
//      var message = "Hello, World!";
//  }
//  console.log(message); // Works! (function-scoped)
// }
// exampleVar()
//console.log(`This is price ${price}`)
function ShowIt() {
    if (true) {
        var nameValue = "Amit";
        let fruitName = "Apple";
        const logo = "ligo";
    }
    console.log(`His name is ${nameValue}`);
    console.log(`His fruit names ${fruitName}`);
    console.log(`Logo ${logo}`);
}
ShowIt();
