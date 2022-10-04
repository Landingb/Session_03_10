
//DOM: Document Object Model
console.dir(document);

//Selectionner:
const titreElement = document.querySelector('h1');
//Modifier l'element
titreElement.innerHTML = "Le <em>titre</em> change"
titreElement.style.color = "purple";
console.dir(titreElement);

//Selectionner plusieurs éléments:
const liElementsList = document.querySelectorAll('li');
console.dir(liElementsList);

//Modifier plusieurs element
liElementsList.forEach( (liElement, position)=>{
    liElement.style.fontSize = "20px";
    liElement.addEventListener('click', ()=>{
        alert(liElement.innerText)
    })
})

//Selectionner par classe;
const imageElement = document.querySelector('.Hero');
console.dir(imageElement);

//Créer un element:
const buttonElement = document.createElement('button');
//Modifier l'élément:
buttonElement.innerText = "Clique!";
buttonElement.style.backgroundColor="royalblue";
buttonElement.style.color="white";

//ajouter une élement, il faut le parent:
document.querySelector('header').appendChild(buttonElement);

//Ajouter des observateur d'evenement:
buttonElement.addEventListener('click', (event)=>{
    const inputElement = document.querySelector('#phraseInput');
    document.querySelector('header').append(inputElement.value)
});

//Exercice:
//Le but d'afficher la table de multiplication sur la page depuis l'entrée de l'utilisateur:
//1- Dans le html: Ajouter un input et un bouton.
//2- Dans js: Selectionner le bouton et ajouter un event listener.
//3- Dans l'event listener, on selectionne l'input pour connaitre la valeur (value).
//4- Utiliser une boucle pour afficher la table de multiplication du nombre.

document.querySelector('#tableButton').addEventListener('click', ()=>{
    const number = document.querySelector('#numberInput').value;
    const parentElement = document.querySelector('#table');

    for(let i = 0; i <= 10; i++){
        const ligne = document.createElement("p");
        ligne.innerText = `${number} x ${i} = ${i*number}`
        parentElement.appendChild(ligne)
    }
})