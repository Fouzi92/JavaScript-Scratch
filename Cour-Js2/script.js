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
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.classList.toggle("rotate");
});

//------------------------------------------------------

const KeypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};

// "Keypress permet de crée un événement lorque vous appuyer sur une touche "Clavier"
document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    KeypressContainer.style.background = "yellow";
    KeypressContainer.style.color = "red";
    ring();
  } else if (e.key === "h") {
    KeypressContainer.style.background = "#54094E";
    KeypressContainer.style.color = "#543309";
    ring();
  } else {
    KeypressContainer.style.background = "black";
  }

  //ring();
});
//---------------------------------------------------------
// Scroll

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//---------------------------------------------------
// Form Events

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>
    `;
    // Affiche le contenue des variables
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//--------------------------------------------------------------
//Load event
window.addEventListener("load", () => {
  console.log("document");
});
//--------------------------------------------------------------
// ForEach
const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.8)";
  });
});

//-------------------------------------------------------------------
// addEventListener vs onclick

//document.body.onclick = function () {
// console.log("mpx");
//};

//document.body.onclick = () => {
//  console.log("looool");
//};

//document.body.onscroll = function () {
// console.log("pdLapub");
//}//;

// Bubbling => fin (de base l'eventlistener est parametre en mode Bublbing)
document.body.addEventListener(
  "click",
  () => {
    console.log("Psg_1");
  },
  false
);

// Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("Psg_7");
  },
  true
);

//--------------------------------------------------------------------------------
// Stop Propagation

questionContainer.addEventListener("click", () => {
  //alert("Cara");
  e.stopPropagation();
});

// removeEventListerner
//------------------------------------------------------
// BOM

//console.log(window.innerHeight);
//console.log(window.scrollY);

//window.open("http://psg.fr", "cours js", "height=600, width=800");
// window.close()

btn3.addEventListener("click", () => {
  confirm(" T'es sur ? tu va finir comme la Belgique ce pays sans palmarès");
});

// prompt
btn2.addEventListener("click", () => {
  let answer = prompt("Bravo Génie Ton Nom ?");
  questionContainer.innerHTML +=
    "<h3>Bravo " + answer + " tu connais ton nom ! </h3>";
});

// Timer, compte à rebours
setTimeout(() => {
  questionContainer.style.borderRadius = "800px";
}, 4000);

let interval = setInterval(() => {
  document.body.innerHTML += "<div class='box'><h2> New box!</h2></div> ";
}, 4000);

document.body.addEventListener("click", () => {
  clearInterval(interval);
});

// Location
//console.log(location.href);
//console.log(location.host);
//console.log(location.pathname);
//console.log(location.search);
//location.replace("http://psg.fr");

//window.onload = () => {
// location.href = "http://twitter.fr";
//};
