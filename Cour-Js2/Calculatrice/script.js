const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    //console.log(e.target.id);
    result.textContent += e.target.id;
    // le (+=) permet t'ajouter plusieur donné sur une ligne sans supprimer
  });
});

// Les checkBox ET LES buttons n'ont pas besoin d'etre appele en JavasCript ou declarer si on a un ID

equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

clear.addEventListener("click", () => {
  result.textContent = "";
});
