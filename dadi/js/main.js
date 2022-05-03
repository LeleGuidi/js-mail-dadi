//Creo la variabile contente l'elemento button
const play = document.getElementById(`play`)
play.addEventListener(`click`,
    function() {
        //Al click del bottone si creano 2 varibili contenenti 2 numeri.
        const userNumber = Math.floor((Math.random() * 6) +1)    
        const pcNumber = Math.floor((Math.random() * 6) +1 )
        //Queste variabili verrano visualizzate a video
        const userResult = document.getElementById(`user_number`)
        userResult.innerHTML = `Il tuo numero è ${userNumber}`
        const pcResult = document.getElementById(`pc_number`)
        pcResult.innerHTML = `Il numero del PC è ${pcNumber}`
        // SE il numero dell'utente è maggiore del pc allora l'utente ha vinto
        const winner = document.getElementById(`result`)
        if (userNumber > pcNumber) {
            winner.innerHTML = `HAI VINTOOO!`
        //ALTRIMENTI l'utente ha perso
        } else {
            winner.innerHTML = `Hai perso :(`
        }
        }
)