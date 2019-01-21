'use strict';

function odworc(wyraz) {
    let wyrazTab = wyraz.split("");
    let odworcTab = wyrazTab.reverse("");
    let wyrazOdwrocony = odworcTab.join("");
    return wyrazOdwrocony;
};

console.log(odworc('akademia108'));


/* Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten sam napis tylko napisany wspak.
Następnie wywołaj tą funkcję i odwróć wspak stringa "Akademia108", a wynik działania funkcji wyświetl w konsoli.
Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it
Podpowiedź przed wysłaniem zadania do sprawdzenia:
- najprościej zadanie zrobić używając funkcji javascript do operacji na tablicach */
