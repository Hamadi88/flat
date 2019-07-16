

// afficher tout les éléments ayant la classe "merveille"

var merveillesElts = document.getElementsByClassName("merveilles");
for(i=0;i<merveillesElts.length;i++){

console.log(merveillesElts[i]);

}

//affiche les elements contenu dans l'id "nouvelle"
console.log(document.getElementById("nouvelles"));

//  affiche les elements de classe "existe qui se trouve dans l'id "antiques
console.log(document.getElementById("antiques").getElementsByClassName("existe").length);

// affcihe le nombre de paragraphe 
console.log(document.querySelectorAll("p").length);
// affiche les paragraphe qui sont dans l'id contenu

console.log(document.querySelectorAll("#contenu p").length);

// affcihe les elements ayant la classe existe
console.log(document.querySelectorAll(".existe").length);

// tous les éléments fils de lélement identifié par "antiques" ayant la classe "existe"

console.log(document.querySelectorAll("#antiques > .existe").length);

// récuperer le contenu html d'un élément

//console.log(document.getElementById("contenu").innerHTML);//

// récuperer le contenu html sans les balise
console.log(document.getElementById("contenu").textContent);

// renvoi l'attribut href du premier lien

console.log(document.querySelector("a").getAttribute("href"));

// attribut de la premiere liste
console.log(document.querySelector("ul").id);

//attribut href du premier lien

console.log(document.querySelector("a").href);

// verifie si le premier lien posséde un attribut target avec la propriéte "hasAttribute"

if (document.querySelector("a").hasAttribute("target")){

	console.log("le premier lien posséde l'attribut target")
}else {
	console.log("le premier lien ne posséde pas l'attribut target")
}

//lister les classes de l'element identifié par l'id "antiques" avec la propriété classlist

var classe = document.getElementById("antiques").classList;

console.log(classe.length);// affiche 1

console.log(classe[0]);


// tester la presence d'une classe dans un element en appelant la methode contains

if(document.getElementById("antiques").classList.contains("merveille")){

	console.log("l'element identifié par antiques posséde la class merveille");
}else {
	console.log("l'element identifié par antiques ne  posséde pas la class merveille");
}
