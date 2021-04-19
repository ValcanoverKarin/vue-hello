//1. Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

//1a. dichiaro la variabile var perche deve essere globale e dichiaro che sto usando Vue
var app = new Vue (
    //1b. oggetto dove andrò a scrivere quali caratteristiche, funzionalità..... l applicazione deve avere
    {
        //1c. el dice a Vue su quale elemento html lavorare
        el: '#root',

        //1d. il data contiene delle variabili/informazioni che posso stampare nella pagina
        data: {
            //1e. stampo il messaggio Hello Vue.js
            message: 'Hello Vue.js',
        }
    }
)