const mousemove = document.querySelector(".mousemove");
const mousemove2 = document.querySelector(".mousemove2");
const mousemove3 = document.querySelector(".mousemove3");

console.log(mousemove2);

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousemove", (e) => {
  mousemove2.style.left = e.pageX + "px";
  mousemove2.style.top = e.pageY + "px";
});

window.addEventListener("mousemove", (e) => {
  mousemove3.style.left = e.pageX + "px";
  mousemove3.style.top = e.pageY + "px";
});
