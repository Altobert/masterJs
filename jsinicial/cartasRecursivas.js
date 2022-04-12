


function functionCrearCarta(largo){
    let card = [];       
    for (i = 1; i<= largo+1; i++) {
        card.push(i)
    }
   return card;
}
console.log(functionCrearCarta(8));
console.log("\n");

function crearCartaR(n){   

   if (n > 0){          
      console.log(n);   
      return crearCartaR(n-1);
   }      
}
console.log(crearCartaR(8));
console.log("\n");


function sum(n) {    
    if (n <= 1) {
      return n;
    }
    return n + sum(n - 1);
}
console.log("Suma numero: "+sum(10));