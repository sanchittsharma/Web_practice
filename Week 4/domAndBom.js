console.log('hello');

// accessing the elements 

// using id 
console.log(document.getElementById('first'));
console.log(document.getElementById('second'));

// using class name 
console.log(document.getElementsByClassName('box'))
document.getElementsByClassName('container')

// using tag name 
document.getElementsByTagName('p')
document.getElementsByTagName('h1')


// query selectors 

document.querySelector('#first');
document.querySelector('#second');

document.querySelectorAll('p');
document.querySelectorAll('.box');

// updating the Element 

document.getElementById('first').innerHTML='hello'

let element =document.querySelector('.container');
console.log(element);
// textContent gives all the content including enter and tabs in element
element.textContent;
// innerText gives the content you render in the UI 
element.innerText;

// outerHTML property represents the entire HTML of an element, including the element itself and all its children
element.outerHTML;




// children,parents,siblings
element.childNodes; //it gives all the tags present in the element including comments and spaces
element.children;  //it gives all the tags 
element.firstChild // return the first child of an element including enter ,tabs
element.lastChild  // return the last child of an element including enter ,tabs
element.firstElementChild  // return the first tag only
element.lastElementChild   // return the last tag only

element.parentElement  //return the parent tag
element.nextElementSibling
element.nextSibling

// Attributes 
element.hasAttribute("style"); //checks the element has that attribute or not
element.getAttribute("style"); //gives  the attribute  that the element has
// element.removeAttribute("attribute name") 
element.setAttribute("style" ,"background-Color:red")

// inserting element 
let ele=document.createElement("h1");
ele.innerHTML="inserted by <b>js</b>";
ele.setAttribute("class","new");
document.querySelector(".container").append(ele)
document.querySelector(".container").before(ele)
document.querySelector(".container").after(ele)

const boxes=document.querySelector(".box");
// boxes.insertAdjacentHTML("beforebegin","<h2>hiiii</h2>");
// boxes.insertAdjacentHTML("afterend","<h2>hiiii</h2>");
// boxes.insertAdjacentHTML("beforeend","<h2>hiiii</h2>");
boxes.insertAdjacentHTML("afterbegin","<h2>hiiii</h2>");

// Browser Object Model 

window.open();
// window.close();
// window.moveTo(); - move the current window
// window.resizeTo(); - resize the current window


// history 
// history.back() used to go back
// history.forward()  used to forward
const backfn=()=>{
    history.back();
}

// location 
document.querySelector(".locate").innerHTML= location.href;
document.querySelector(".host").innerHTML= location.hostname;
document.querySelector(".proto").innerHTML= location.protocol;

// navigator 
document.querySelector(".cookie").innerHTML=navigator.cookieEnabled  //return true if enabled cookie
document.querySelector(".lan").innerHTML=navigator.language // return the navigator lang
document.querySelector(".lan").innerHTML=navigator.onLine   //return true if browser id online