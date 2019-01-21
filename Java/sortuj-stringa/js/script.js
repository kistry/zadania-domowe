'use strict';

function sortuj(wyraz) {

    let strTab = wyraz.split("");
    let revTab = strTab.sort();
    return revTab;
}

console.log(sortuj("Akademia108"));



/* Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten napis z posortowanymi literami.
Następnie wywołaj funkcję i posortuj stringa "Akademia108", a wynik działania funkcji wyświetl w konsoli.
Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it
Podpowiedź przed wysłaniem zadania do sprawdzenia:
- najprościej zadanie zrobić używając funkcji javascript do operacji na tablicach
 */
