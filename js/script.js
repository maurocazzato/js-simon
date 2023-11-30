// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// faccio partire il gioco
const playGame = document.querySelector(".play");
const box = document.querySelector(".boxnumber");

    // al click....
playGame.addEventListener("click", function(){
    
     // genero 5 numeri casuali
    const casualNumber= genArrayRandomNum(1, 100, 5);
    console.log(casualNumber);


    // faccio apparire i numeri
    box.append(casualNumber);

    // variabile dei  30 secondi
    let second = 30;
    

    const clock = setInterval( 
        function () {
            // lista numeri definiti dopo i 30 secondi dall'utente
            const list = [];
            const listok =[];

            // quando il contatore arriva a 0
            if(second === 0){
                // verifico se sono alla fine e bloccherò la visualizzazione
                clearInterval(clock);

                    // chiedo all'utente di inserire i numeri visti
                    for (let i=1; i <=5; i++){
                        // lutente inserisci 5 numeri
                        let numero = prompt("inserisci un numero");
                        numero = parseInt(numero);
                        // i numeri finiscono nella lista di Array
                        list.push(numero);
                    };
                        // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
                        if(casualNumber.includes(list)){
                            list.add(listok);
                        }
                         console.log(listok);

            // se non è a 0 il contatore procede in diminuzione
            } else{
                second--;
                console.log(second);
            };


        },
        250
        );

});









// funzioni

// funzione che crea un array di numeri randomici
function genArrayRandomNum(minNum, maxNum , lunghezzaArr){
    // array da popolare
    const arrayToGen = [];

    // ciclo che popola l'array
    while (arrayToGen.length < lunghezzaArr){
        // generare un numero random in un range (min,max)
        let newNumber = genArrayRandomNumMinMax(minNum, maxNum);
            // se il numero generato non è gia presente nell'array
            if (!arrayToGen.includes(newNumber)){
                // lo pusho nell'array
                arrayToGen.push(newNumber);
            }
    }

    return arrayToGen;
}


// funzione che crea un array di numeri randomici (min,max)
function genArrayRandomNumMinMax(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
