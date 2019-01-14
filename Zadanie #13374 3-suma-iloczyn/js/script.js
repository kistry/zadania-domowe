'use strict';

let tablica = [0, 1, 2, 3, 4, 5];

function sumaIloczyn() {
    let suma = 0;
    let iloczyn=0;
    for (let i in tablica) {
        suma += tablica[i];
        iloczyn*=tablica[i];
    }
    console.log('suma liczb='+suma);
    console.log('iloczyn liczb='+iloczyn);
}

console.log(sumaIloczyn(tablica));


/* Napisz funkcję ze zmiennymi lokalnymi, która policzy sumę i iloczyn 
elementów tablicy [1, 2, 3, 4, 5, 6]. 
Funkcja przyjmuje jeden parametr - ww. tablicę z liczbami. 
Funkcja nie zwraca nic. Funkcja wyświetla wyniki w konsoli.
Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it
Podpowiedź przed wysłaniem zadania do sprawdzenia:
- użyj pętli for lub forEach w zadaniu */