'use strict';

let liczby = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function Sortowanie(liczby) {
    let change, temp;
    do {
        change = false;
        for (var i = 0; i < liczby.length - 1; i++) {
            if (liczby[i + 1] < liczby[i]) {
                temp = liczby[i];
                liczby[i] = liczby[i + 1];
                liczby[i + 1] = temp;
                change = true;
            }
        }
    } while (change);
    return liczby;
}
console.log('Kolejność liczb przed sortowaniem: ' + liczby);
console.log('Kolejność liczb po sortowaniu: ' + Sortowanie(liczby));