//   JavaScript Classes 

class animal{
    constructor(name)
    {
        this.name=name;
        console.log("Object Created");
    }
    eats()
    {
        console.log( `${this.name} is eating`);
    }
    run(){
        console.log(`${this.name} is running`);
    }
}
let monkey=new animal("monkey");
monkey.eats();
monkey.run();


class lion extends animal{
  
    constructor(name)
    {
        super(name);  //--> used in classes to call methods from a parent
        console.log("lion constructor");
    }
    eats()  //--> method overriding
    {
        console.log("lion class method");
    }
}
let l=new lion("lion");

l.eats();

console.log(l instanceof lion);  // --> instanceof is used to check the object is of certain class


// JS Callback --> function that is passed as an argument to another function and is executed later
  
function example(name, callback) {
    console.log("Hello, " + name);
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  example("Sanchit", sayGoodbye);
  
// async and await 
// async --> used to define asynchronous functions, which always return a Promise.
// await --> makes JavaScript wait until a Promise resolves

function example() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data received!");
      }, 2000);
    });
  }
  
  async function getData() {
    console.log("Fetching data...");
    let data = await example();
    console.log(data);
  }
  
  getData();
  
  