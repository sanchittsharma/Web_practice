// function for printing name 
function myname()
{
    console.log("Sanchit");

}
myname();
// function add two no 

function sum(a,b)
{
    console.log(a+b);
}
sum(4,5);

const mul= function (a,b) {
    return a*b;
}
console.log(mul(2,5));

let ans=mul(5,5);
console.log(ans);

// arrow function 

let arr= (a,b)=>{
    return a**b;
}
console.log(arr(2,6));

// Self-Executing Function 
(function() {
    console.log("This function runs immediately!");
})();
