const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


/* button and event listener stuff from The Odin Project */
const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello World");

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
  alert("Hello World");
});

/*
// BTNS 2 & 3
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn2/3 = document.querySelector("#btn2/33");

// BTN 2
btn2.onclick = alertFunction;

// BTN 3
btn3.addEventListener("click", alertFunction);
*/

btn2.addEventListener("click", function (e) {
    console.log(e);
});
btn3.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});

/* INSTEAD OF ADDING EVENT LISTENER TO EVERY BUTTON
INDIVIDUALLY, CAN DO THIS:

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
*/

/* MY CODE BELOW */

const redTextPara = document.createElement("p");
redTextPara.textContent = "Hey I'm red!";
redTextPara.style.color = "red";
container.appendChild(redTextPara);

const blueTextHeader = document.createElement("h3");
blueTextHeader.textContent = "I'm a blue h3";
blueTextHeader.style.color = "blue";
container.appendChild(blueTextHeader);


const container1 = document.createElement("div");
container1.style.backgroundColor = "pink";
container1.style.cssText = "border: 2px solid black;"

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
container1.appendChild(h1);

const para = document.createElement("p");
para.textContent = "ME TOO!";
container1.appendChild(para);

container.appendChild(container1);