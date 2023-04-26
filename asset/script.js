
/*
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

const eleBtn = document.querySelector(".button")



eleBtn.addEventListener("click", function(){
    const eleGrid = document.querySelector('.griglia')
    const eleDifficulty = document.getElementById("difficoltà");
    let difficoltà = eleDifficulty.options[eleDifficulty.selectedIndex].value;
    

    const num = [];
    
     
    
    if (difficoltà == "facile") {
        eleGrid.classList.remove("facile", "media", "difficile");
        eleGrid.classList.add("facile");
        createGrid(100, eleGrid);
        getRandom (1, 100, num);

    } else if (difficoltà == "media") {
        eleGrid.classList.remove("facile", "media", "difficile");
        eleGrid.classList.add("media");
        createGrid(81, eleGrid);
        getRandom (1, 81, num);
        
    } else if (difficoltà == "difficile") {
        eleGrid.classList.remove("facile", "media", "difficile");
        eleGrid.classList.add("difficile");
        createGrid(49, eleGrid);
        getRandom (1, 49, num);
    }

    const listCells = document.querySelectorAll('.cell');

    for (let i = 0; i < listCells.length; i++) {
        const cell = listCells[i];
        cell.addEventListener('click', function() {
            if (num.includes(i + 1)) {
                console.log ("hai cliccato la cella" + this.innerHTML);
                this.classList.toggle ("bomb");
                console.log ("hai perso");
            }
            else{
                console.log("hai cliccato la cella" + this.innerHTML);
                this.classList.toggle("clicked");
                ;
            }
        })
}

})














function createGrid(numCells, eleGrid) {
    eleGrid.innerHTML = ''

	for (let i = 1; i < numCells + 1; i++) {
		eleGrid.innerHTML += `<div class="cell">${i}</div>`;
	}

    const listCells = document.querySelectorAll('.cell');
	
    for (let i = 1; i < listCells.length; i++) {
        const cell = listCells[i];
        cell.addEventListener('click', function(){
            this.classList.toggle('clicked');
        });
    }
}

function getRandom (min, max, numbers) {
    // var numbers = [];
    while (numbers.length < 16) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
      if (!numbers.includes(randomNumber)) {
    numbers.push(randomNumber);
  }
}
console.log(numbers);
}