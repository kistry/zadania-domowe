'use strict';

let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

// function Miasta(){
let ol=document.createElement("ol");
document.body.appendChild(ol);
ol.innerHTML = "fgfgfgf";

let li=document.createElement("li");
document.ol.appendChild('li');
ol.innerHTML = "fgddfdff";

// --------nie podpina pod element rodzica----------------------

cities.forEach(element => {
    let miasta = document.createElement("li");
    console.log(element);
    miasta.setAttribute("class", "city");
    miasta.innerHTML = element;
    document.ol.appendChild(miasta);
});






// }

/* Wyświetl nazwy miast w postaci listy numerowanej.
Miasta zostały umieszczone w tablicy poniżej.
Znacznik listy i elementów listy stwórz w JavaScript.
Do każdego elementu listy dodaj klasę "city".
Następnie za pomocą odpowiednich metod wyświetl listę na stronie.

let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

Podpowiedź przed wysłaniem zadania do sprawdzenia:
- za pomocą JavaScript należy stworzyć elementy HTML, a potem dopiąć je do strony :)
- do wyświetlania miast użyj pętli (dowolnego rodzaju)
 */

/* 





let par=document.createElement('p'); //wezel
// let parText=document.createTextNode('text');
// let classAtr=document.createAttribute('class'); //weze
// classAtr.value=('par');

// par.setAttribute(class='city');
/* for(let i in cities){
var paragraf = document.createElement('p'+i);
par.setAttribute("class", "border_class");
} */

/* let atrybut = par.createAttribute(class); 
atrybut.value = "city"; */


// for(let i in cities){
//     console.log(cities[i]);

//     // let classAtr=document.createAttribute(par);  

//     par.appendChild(cities); 

//     // par.setAttributeNode( classAtr );
    // const par = document.createElement("p");
    // let item=par[i];
    // par.appendChild(par);
    // par.appendChild("p");
// }

// document.body.appendChild(par); 







// document.body.appendChild( btn );

// console.log(cities);
// let num = document.createElement("ul"); //tworzymy ul
// let classnum = document.createAttribute('city'); //clasa city


// document.body.appendChild(num); //dodaje nowy wezel dziecko


/* 
for (let i = 0; i < cities.length; i++) {
    
    const par = document.createElement("p");
par.appendChild()

        // fragment.appendChild(p);
    console.log(i + ":" + cities[i])
};
 */

// for(let i in cities){console.log(cities[i])}

//tworzenie fragmentu dokumentu

// var text = document.createElement("UL");

// ----------------------------------------------------
// let lista=document.createElement('cities'); 
// document.createElement("UL");

// x.setAttribute("id", "myUL")

// let lista = document.createElement( "button" );
// ---------------------------------------------



//  */