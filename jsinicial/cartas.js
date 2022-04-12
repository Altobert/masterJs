let i, j, k
let n = 5                 //order of plane, must be a prime number
let numOfSymbols = n + 1  //order of plane + 1
let cards = []            //the deck of cards //arreglo o mazo de cartas
let card = [];            //the current card we are building // carta actual que estamos construyendo

//to start, we build the first card
//Para iniciar se construye la primera carta y  
//se van insertanto los elementos en una lista carta
for (i = 1; i<= n+1; i++) {
    card.push(i)
}

//Se guarda la primera carta en el arreglo cartas
cards.push(card)

//then we build the next n number of cards
//Luego se procede a construir las siguientes n cartas
// a medida que se va creando la carta, se inserta en el mazo.
for (j=1; j<=n; j++) {
    card = []
    card.push(1)
   
    for (k=1; k<=n; k++) {
        card.push(n * j + (k+1))
    }
    cards.push(card)
}

//finally we build the next n² number of cards
//finalmente se construyen las siguientes n2 cartas
for (i= 1; i<=n; i++) {
    for (j=1; j<=n; j++) {
        card = []
        card.push(i+1)
       
        for (k=1; k<= n; k++) {
            card.push(n+2+n*(k-1)+(((i-1)*(k-1)+j-1)%n))
        }
        cards.push(card)
    }
}
//Al final se muestra
console.log(cards);