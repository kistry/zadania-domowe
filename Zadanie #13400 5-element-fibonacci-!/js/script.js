'use strict';

// console.log("test");
let n = 4;

function fibonici(n) {
    let liczba=[0];
    
    if (n < 0) { console.log("wartosc ponizej 0");};
    
    // if (n == 0) { liczba[0] = 0; console.log(0);};
    if (n == 0) { liczba[0] = 0;};

    // if (n == 1) { liczba[1] = 1; console.log(0 + ',' + 1);};
    if (n == 1) { liczba[1] = 1; };
    
    if (n == 2) { liczba[2] = 2;};
        
    if (n > 2) {
        liczba[0] = 0;
        liczba[1] = 1;
        liczba[2] = 2;

         for (let i = 3; i < n; i++) {
            liczba += ((i - 1) + (i - 2));
            console.log(liczba + ",");
        }; 
    };
}
//    return liczba;

// };
console.log(fibonici(2));
//  console.log(liczba);

// let iloczyn=0;
// function sumaIloczyn(iloczyn) {
//     let suma = 0;
//     iloczyn += iloczyn;
//     console.log('suma liczb=' + suma);
//     console.log('iloczyn liczb=' + iloczyn);
// }

    // console.log(sumaIloczyn(tablica));
    // sumaIloczyn(4);


/* Napisz funkcję ze zmiennymi lokalnymi, która policzy sumę i iloczyn 
elementów tablicy [1, 2, 3, 4, 5, 6]. 
Funkcja przyjmuje jeden parametr - ww. tablicę z liczbami. 
Funkcja nie zwraca nic. Funkcja wyświetla wyniki w konsoli.
Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it
Podpowiedź przed wysłaniem zadania do sprawdzenia:
- użyj pętli for lub forEach w zadaniu */