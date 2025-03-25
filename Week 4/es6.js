let myname="sanchit";
myname="sanchitsharma"; //allowed

const a=5;
//a=6 not allowed


// arrow function 
const sum = (c,b)=> {
    return c+b;
}
console.log(sum(5,9));

// Template Literal 
// let myname = "Sanchit";
// ` allows multiple line string` 
console.log(`Hello, ${myname}!`);


// creating Object 
const car={Brand:"tata" ,model:"harrier" };

let{Brand,model}=car;
console.log(`car brand is ${Brand} and model is ${model}`);


// array 
const fruits = ["Banana", "Orange", "Apple", "Mango"];


// destructing
let [fruit1,fruit2,fruit3]=fruits; 
console.log(fruit3);


// for of loop 
for (let fruit of fruits) {
    console.log(fruit);
}


// spread operator --> Expands an array/object into individual values
let arr1=[1,2,3];
let arr2=[...arr1,4,5,6];
console.log(arr2);


// rest operator --> Collects values into an array/object,allows functions to accept any number of arguments.
const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first);  
console.log(second); 
console.log(rest);   

const user = { username: "Sanchit", age: 22, city: "Jaipur", country: "India" };

const { username, ...remaining } = user;

console.log(username); 
console.log(remaining); 



// promises 
let promise1=new Promise((resolve,reject)=>{
    let success=true;

if(success)
{
    resolve("promise resolved");
}
else{
    reject("promise rejected");
}
});


// js maps --> holds key-value pairs where the keys can be any datatype.
const maps= new Map(
[
["apple",10],
["mango",20]
]
);
maps.set("oranges",15); //can be added using set

console.log(maps.get("apple"));




