// alert("hhhhhh") 
const SELECT = document.querySelector("#choixChat"); 
const RAISON = document.querySelector("#raison");
 const ENVOYER = document.querySelector("#envoyer"); 
 console.log(RAISON.parentNode); //Fontion
//pour changer le background de la div qui contient textarea avec une classebootstrap 

function backgroundRaison(colorClass) {
RAISON.parentNode.setAttribute("class", "");// RESET l'attribut class
RAISON.parentNode.classList.add(colorClass, "p-2"); 
}
//Ajoute la couleur Bootstrap + le padding } //Fontion pour changer le background de la div qui contient select avec une classe bootstrap function backgroundSelect(colorClass)
{ SELECT.parentNode.setAttribute("class", "");// RESET l'attribut class
SELECT.parentNode.classList.add(colorClass, "p-2");// 
// Ajoute la couleur Bootstrap + le padding } //Fonction qui permet affiche un message lorsque le form remplit toutes les conditions pour être envoyé. 
}
function succesForm() {
document.getElementsByClassName("form-control")[0].remove();//Efface le form let
succesSend = document.createElement("div");
}
//Créé une div et la store dans succesSend 
succesSend.classList.add("container", "bg-success-subtle",
"text-success", "p-4", "rounded-4");//Ajoute les classes dans sur la div let
text = document.createElement("p"); text.textContent = "Merci pour votre bonté !Votre demande va être étudiée dans les plus brefs délais.";
//Crée l'élement paragraphe et lui ajoute du texte en tant que contenu
succesSend.append(text);//Ajoute l'élément p dans la div
divForm.append(succesSend);

//Ajoute l'élément div qui contient le p dans le DOM au niveau de la div qui à l'id divForm } 

function validationForm() {
     if (RAISON.value.length < 10 && SELECT.value == "") 
        {//Si la valeur de textarea est moins que 10 et le select n'a pas de choix backgroundRaison("bg-danger-subtle");
backgroundSelect("bg-danger-subtle"); }
 else if (RAISON.value.length >= 10 && SELECT.value == "") 
    {//Si la valeur de textarea est supérieur ou égal à 10 et le select n'a pas de choix backgroundRaison("bg-success-subtle");
backgroundSelect("bg-danger-subtle");
 } else if (RAISON.value.length < 10 &&
SELECT.value != "") 
{//Si la valeur de textarea est moins que 10 et le select à un choix
 backgroundRaison("bg-danger-subtle");
backgroundSelect("bg-success-subtle"); } else {//textarea et choix sont validés
succesForm(); }; };


ENVOYER.addEventListener("click", (e) => {
e.preventDefault();//Empeche le rafraichissement de la page. validationForm();
});
