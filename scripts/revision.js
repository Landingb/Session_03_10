console.log(document);

//1- Les variables et les constantes:

//Déclarer une variable:
let variable = "Une variable"; //Type primitif: chaines de caracteres/strings
console.log(variable);

//Affectation de valeur:
variable = "Une nouvelle valeur";
console.log(variable);

//Déclarer une constante
const cst = "Une constante"; //Type primitif: chaines de caracteres/strings
console.log(cst);
// cst = "Une nouvelle valeur" -> Provoque une erreur.

//2- Types primitifs:

//Les strings:
let phrase = "Bonjour,"; //Type primitif: chaines de caracteres/strings
let phrase2 = "ça va?"; //Type primitif: chaines de caracteres/strings
//Concatenation: +
console.log(phrase + " " + phrase2);
console.log(`${phrase} ${phrase2} Quel age avez vous?`);

//Les nombres:
let a = 10; //Type primitif: Number
let b = 20; //Type primitif: Number
//opération mathematiques:
let addition = a + b;
console.log(addition);

console.log("Addition: " + 1 + 1); //Resultat: Addition: 11
console.log("Addition: " + (1 + 1)); //Resultat: Addition: 2

console.log("soustraction = " + (a - b));
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//Les booleans:
let vrai = true; //Type primitif: Boolean
let faux = false; //Type primitif: Boolean

//Opérateurs logique:
let bool1 = true;
let bool2 = false;

//ET:
console.log(bool1 && bool2);
//vrai et vrai = vrai
//vrai et faux = faux
//faux et vrai = faux
//faux et faux = faux

//OU:
console.log(bool1 || bool2);
//vrai ou vrai = vrai
//vrai ou faux = vrai
//faux ou vrai = vrai
//faux ou faux = faux

//Les tableaux:
let commande = ["Pizza", "Coca-cola", "Dessert"];
console.log(commande);
console.log(commande[1]);
commande.push("Jus");
console.log(commande);

console.log(commande.find((element) => element.length > 6)); // Affiche: Coca-cola

console.log("---------");
let filterList = commande.filter((element) => {
  console.log(element);
  return element.length > 6;
});
console.log(filterList);

let newCommand = commande.map((element, position) => {
  return "Element " + (position + 1) + ": " + element;
});
console.log(newCommand);

//3- Les boucles
for (let i = 0; i <= 10; i = i + 1) {
  console.log("Boucle: " + i);
}

let i = 0;
while (i <= 10) {
  console.log("Boucle while: " + i);
  i = i + 1;
}

// let userInput = "Pas un nombre";
// while(isNaN(userInput)){
//     userInput = prompt("Entrez un nombre")
// }

//4- Conditions:
let c = 9;

//if else:
if (c <= 10) {
  console.log("C'est inf ou egal a 10");
} else {
  console.log("C est sup a 10");
}

//opérateurs ternaires: condition ? si vrai : si faux;
console.log(c <= 10 ? "C'est inf ou egal a 10" : "C'est sup a 10");

//Exercice:
//1- Déclarer des variables:
// - nom et prenom: Strings
// - age: Number
// - isPermis: Boolen
// - cours: List/Array

//2- Afficher dans la console la phrase:

// Bonjour, nom prenom!
// Vous pouvez conduire: Si age >= 18 et isPermis
// Vous ne pouvez pas conduire: sinon
//- HTML
//- CSS
//- Javascript

//Solution:
let nom = "Djemai";
let prenom = "Samy";
let age = 28;
let isPermis = true;
let cours = ["HTML", "CSS", "JS", "PHP"];

console.log(
  `Bonjour, ${nom} ${prenom}! ${
    isPermis && age >= 18 ? "Vous pouvez conduire!" : "Vous ne pouvez pas conduire"
  }. Vos cours sont: ${cours.join(" / ")}`
);

cours.forEach((element, position) => {
  console.log("Cours n°" + position + " " + element);
});

for (let i = 0; i < cours.length; i++) {
  console.log("Cours n°" + i + " " + cours[i]);
}

//5- Les fonctions:

//Déclarer Une fonction basique:

function disBonjour() {
  console.log("bonjour!");
  console.log("ça va?");
}

//execute/appel la fonction
disBonjour();
console.log("Suite du code......");
disBonjour();

//Une fonction avec retour/resultat:
function retourneBonsoir() {
  console.log("Bonsoir!");
  console.log("ça va?");
  return "J'ai dit bonsoir";
}

let leRetourDeDisBonsoir = retourneBonsoir();
console.log(leRetourDeDisBonsoir);

console.log(retourneBonsoir());

function calculMoyenne() {
  let notes = [10, 20, 16, 2, 8];

  //La moyenne c'est: (10 + 15 + 16 + 2 + 8) / 5

  //La somme des notes:
  let somme = 0;
  notes.forEach((note) => {
    somme = somme + note;
  });
  return somme / notes.length;
}
console.log(calculMoyenne());

//Fonction avec paramètres: f(x) = x + 3 / f(2) = 2 + 3 = 5
function disSalut(nom, prenom) {
  return `Vous etes ${nom} ${prenom}!`;
}

console.log(disSalut("Djemai", "Samy"));

let john = disSalut("Doe", "John");
console.log(john);

function moyenne(notes) {
  let somme = 0;
  notes.forEach((note) => {
    somme = somme + note;
  });
  return somme / notes.length;
}

console.log(moyenne([10, 20, 16, 2, 8]));

console.log(moyenne([11, 18, 13, 5, 0, 12]));

//Exercice:
//1- Declarer une fonction qui prends un parametre un nombre.
//La fonction affiche la table du multiplication du nombre entre 0 et 10.

//Solution
function table(nombre) {
  for (let i = 0; i <= 10; i++) {
    console.log(nombre * i);
  }
}

//Fonction anonyme
const table2 = function (nombre) {
  for (let i = 0; i <= 10; i++) {
    console.log(nombre * i);
  }
};

//fonction flechée
const table3 = (nombre) => {
  for (let i = 0; i <= 10; i++) {
    console.log(nombre * i);
  }
};

table(5);
table2(12);
table3(8);

//Les callbacks:
function afficheEnLigne(nombre, i, resultat) {
  console.log(`${nombre} x ${i} = ${resultat}`);
}
function affiche(nombre, i, resultat) {
  console.log("- " + resultat);
}

function tableAffiche(nombre, callback) {
  for (let i = 0; i <= 10; i++) {
    callback(nombre, i, i * nombre);
  }
}

tableAffiche(5, afficheEnLigne);
tableAffiche(5, affiche);

tableAffiche(8, (nombre, i, resultat) => {
  const ol = document.querySelector("ol");
  const p = document.createElement("p");
  p.textContent = `${nombre} x ${i} = ${resultat}`;
  ol.appendChild(p);
});

//les Objets:
const user1 = {
  nom:"Djemai",
  prenom:"Samy",
  age:28,
  isPermis:true,
  cours:["js", "css"],
  prof:{nom:"Doe"},
  affiche:function(){console.log(this.nom+" "+this.prenom)}
}

console.log(user1.age);
user1.affiche();

class User{
  constructor(nom, prenom, age, isPermis, cours){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.isPermis = isPermis;
    this.cours = cours;
    this.prof = {nom:"Doe"};
    this. affiche = function(){console.log(this.nom+" "+this.prenom)}
  }
}

const user2 = new User("Potter", "Harry", 20, false, ['php']);
user2.affiche();