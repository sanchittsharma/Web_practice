// creating Object
const car = { Brand: "tata", model: "harrier", year: 2019 };

// destructing object poperties

let { Brand, model, year } = car;

console.log(`car brand is ${Brand} and model is ${model} launched in ${year}`);

// declaration using new keyword
const newcar = new Object();

// add properties to object 

newcar.Brand = "maruti";
newcar.model = "swift";

// using object poperties
console.log(newcar["Brand"]);
console.log(newcar.model);

// function in object 
const person={
     firstname:"Sanchit ",
     lastname:"sharma",
     age:22,
     location:"jaipur",
     fullname:function() {
        return this.firstname + " " +this.lastname
     }
};

console.log(`Hi ! ${person.fullname()}`);
