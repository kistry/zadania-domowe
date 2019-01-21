'use strict';

class Ksiazka {

    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }

    opiszKsiazke() {
        console.log("Ksiazka ma tytuł" + this.tytul + ", autorem jest " + autor + "i została" + przeczytana);
    }
}

let spisKsiazek = new Array();

spisKsiazek.push(new Ksiazka('Pan Tadeusz', 'Mickiewicz', 'przeczytana'));
spisKsiazek.push(new Ksiazka('Wiedzmin', 'Sapkowski', 'nieprzeczytana'));
spisKsiazek.push(new Ksiazka('Balladyna', 'Słowacki', 'nieprzeczytana'));

function iloscPrzeczytanych(spisKsiazek) {
    let ilePrzeczytanych = 0;
    for (let i in spisKsiazek) {
        if (spisKsiazek[i].przeczytana == 'przeczytana') {
            ilePrzeczytanych++;
            console.log('Ksiaka ma tytuł: ' + spisKsiazek[i].tytul + ', autorem jest ' + spisKsiazek[i].autor + ' i została ' + spisKsiazek[i].przeczytana);
            // spisKsiazek[i].opiszKsiazke; NIE WIEM JAK SIE DOBRAC DO METODY Ksiazka.opiszKsiazke ????
            
        };
    }
    return ilePrzeczytanych;
}
let ile = iloscPrzeczytanych(spisKsiazek);

console.log('zostało przeczytanych ksiazek:' + ile);

/*
Napisz klasę "Ksiazka", która ma właściwości "tytul", "autor", "przeczytana" (przeczytana jest typu Boolean) 
oraz jedną metodę "opiszKsiazke", która zwraca stringa opisującego tą książkę wg. wzoru "Książka ma tytuł Wiedźmin, autorem jest Andrzej Sapkowski i została przeczytana.".
Stwórz 3 instancje obiektu tej klasy z czego jedna z książek ma być już przeczytana, a następnie stwórz nową tablicę globalną i dodaj do niej te 3 książki.
Następnie napisz funkcję "iloscPrzeczytanych", która jako parametr przyjmuje tablicę obiektów (naszych książek, ktore stworzyliśmy), a zwraca nam ilość książek, ktore zostały przeczytane. Podczas iteracji po tablicy (wewnątrz tej funkcji) i sprawdzania, czy książka jest przeczytana, wywołuj także na obiekcie metodę opiszKsiazke(), a wynik jej działania wyświetlaj w konsoli.
Na samym końcu wyświetl w konsoli ilość przeczytanych książek
Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it */