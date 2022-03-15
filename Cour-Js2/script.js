// SELECTEURS
//document.querySelector("body").style.background = "green"

//const baliseHtlm = document.querySelector("h4");
//console.log(baliseHtlm);

// Click event

const questionContainer = document.querySelector(".click-event");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.toggle("show-response");
  response.style.background = "red";
});

btn2.addEventListener("click", () => {
  response.classList.toggle("show-response");
  response.style.background = "green";
});
btn3.addEventListener("click", () => {
  response.classList.toggle("show-response");
  response.style.background = "red";
});

//----------------------------------------------------

// Mouve Events

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25% , -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50% , -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.classList.toggle("cadre");
});

questionContainer.addEventListener("mouseout", () => {
  console.log("mouseout !");
});
