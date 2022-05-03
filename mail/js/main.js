// Creare array con 3 mail già inserite
const listMail = [`1@mail.it`, `2@mail.it`, `3@email.it`];
//Un volta che l'utente ha inserito la sua email nel campo input, dovrà premere il bottone per accedere.
//Quindi inserire in una variabile l'elemento button
const login = document.getElementById("login");
//Al click del bottone, bisogna inserire il campo dell'utente all'interno di una variabile
login.addEventListener(`click`, 
function() {
    //Creare una variabile con dentro il contenuto inserito dall'utente.
    const personalMail = document.querySelector(`input`).value;
    //Creare una variabile che renda possibile l'output finale della ricerca
    let found = false;
    //Creare una variabile per inserire l'output della ricerca.
    const message = document.getElementById(`message`)
    message.innerHTML = "";
    // console.log(message)
    const container = document.querySelector(`div.container`)
    //La variabile contenente il campo dell'utente bisogna confrontarla con ogni elemento dell'array
    for (let i = 0; i < listMail.length; i++) {
        //Se l'utente ha inserito il contenuto presente all'interno dell'array, la variabile che si occupa dell'output diventerà vera
        if (listMail[i] == personalMail) {
            found = true;
        }
    }
    //SE la variabile che si occupa dell'output è vera allora il contenuto inserito dall'utente è uguale ad un elemento dell'array.
    if (found) {
        //Allora si stampa a video la conferma.
        message.innerHTML = `Bentornato!!`;
    // ALTRIMENTI ha inserito un contenuto inesistente o errato.
    } else {
        //E si stampa a video un messaggio che inviti a riprovare.
        message.innerHTML = `Password inesistente o errata, riprovare.`;
    }
}
);


