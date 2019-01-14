'use strict';

let tablica = [0, 1, 2, 3, 4, 5];

function sumaKw() {
    let wynik=0;
    
    tablica.forEach(element => {
      wynik;
      wynik += Math.pow(element, 2);
    });
    return wynik;
};

console.log(sumaKw(tablica));

/* Zadanie #13387: 4-suma-kwadratow

Napisz funkcję ze zmiennymi lokalnymi, która liczy sumę kwadratów elementów tablicy [0,1,2,3,4,5].
Funkcja przyjmuje jeden parametr - w/w tablicę z liczbami. 
Funkcja zwraca sumę kwadratow. Wyświetl wynik działania funkcji w konsoli.
Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it
Podpowiedź przed wysłaniem zadania do sprawdzenia:
- użyj w zadaniu pętli, którą uważasz za słuszną i klasy Math. */