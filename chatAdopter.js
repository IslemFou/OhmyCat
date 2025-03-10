//alert("js est activé !");
let choix = document.querySelector("#selectChat");
let raison = document.querySelector("#textarea");
let envoyer = document.querySelector(".btn-primary");
let divContain = document.querySelector("#divContain");
let divForm = document.querySelector("#divForm");

// console.log(divContain);
// console.log(choix);
// console.log(raison);
// console.log(envoyer);

envoyer.addEventListener("click", function (event) {
  event.preventDefault();

  if (choix.value == "" && raison.value.length < 10) {
    //erreur
    choix.parentNode.style.backgroundColor = "red";
    raison.parentNode.style.backgroundColor = "red";
  } else if (choix.value != "" && raison.value.length < 10) {
    choix.parentNode.style.backgroundColor = "green";
    raison.parentNode.style.backgroundColor = "red";
  } else if (choix.value == "" && raison.value.length >= 10) {
    choix.parentNode.style.backgroundColor = "red";
    raison.parentNode.style.backgroundColor = "green";
  } else {
    choix.parentNode.style.backgroundColor = "green";
    raison.parentNode.style.backgroundColor = "green";
    suppressionForm();
    ajoutMessage("Votre demande a bien été prise en compte");
  }
});

function suppressionForm() {
  divForm.classList.add("d-none");
}

function ajoutMessage(message) {
  let p = document.createElement("p");
  p.innerText = message;
  p.style.backgroundColor = "green";
  divContain.append(p);
}
