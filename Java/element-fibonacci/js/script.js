'use strict';

function obliczElement(n) {
    let elemN = n;
    
    let elem1 = 0;
    let elem2 = 1;
    
    let elemK = 0;
    
    if (elemN==1) {
      console.log("1 element ciągu Fibonnaciego wynosi: " + elem1);
      return elem1;

   } else if (elemN==2) {
      console.log("2 element ciągu Fibonnaciego wynosi: " + elem2);
      return elem2;

   } else 
      for (let i = 1; i < elemN; i++) {
      elemK = elem2 + elem1;
      elem1 = elem2;
      elem2 = elemK;
      }
   
    console.log( n + " element ciągu Fibonnaciego wynosi: " + elemK );
  
    return elemK;
}

obliczElement(10);