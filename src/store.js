import { reactive } from 'vue';

export const store = reactive({
    navOpen: false,

    //elenco progetti
    projects: [
        //Boolflix
        {
            id: 1,
            title: 'Boolflix',
            image: '/public/my-portfolio-boolflix.jpg',
            image_project: '/public/my-portfolio-boolflix-pc.png',
            description: [
                "Boolflix è un semplice motore di ricerca di Film e serie TV, vagamente ispirato a Netflix.",
                "La Web App mostra in home page le copertine dei film e serie TV più popolari e al passaggio del mouse su di essa mostra i rispettivi dati: quest'ultimi sono ottenuti tramite chiamate AJAX al server di The Movie DB.",
                "L'utente è in grado di cercare i titoli che più interessando inserindo la parole chiave nell'apposita barra di ricerca."
            ],
            skills: [
                "HTML", "CSS", "Javascript", "Bootstrap", "VueJS", "sass", "git", "github"
            ],
            link_github: "https://github.com/dunzolo/vite-boolflix",
            link_website: "https://boolflix-dunzolo.netlify.app/"
        },
        //Boolzapp
        {
            id: 2,
            title: 'Boolzapp',
            image: '/public/my-portfolio-boolzapp.jpg',
            image_project: '/public/my-portfolio-boolzapp-pc.png',
            description: [
                "Boolzapp è una replica della piattaforma web di messaggistica più utilizzata: WhatsApp Web.",
                "Selezionando un contatto sarà possibile visulizzare la relativa conversazione nel pannello dedicato, dando la possibilità all'utente di scrivere ulteriori messaggi, ottenendo una risposta casuale da parte del computer.",
                "E' presente una barra di ricerca con cui verranno filtrate le conversazioni in base all'input inserito dall'utente",
                "Inoltre è possibile cancellare un singolo messaggio o l'intera conversazione del contatto selezionato."
            ],
            skills: [
                "HTML", "CSS", "Javascript", "git", "github"
            ],
            link_github: "https://github.com/dunzolo/vue-boolzapp",
            link_website: "https://dunzolo.github.io/vue-boolzapp/"
        },
        //Spotify Web
        {
            id: 3,
            title: 'Spotify',
            image: '/public/my-portfolio-spotify.jpg',
            image_project: '/public/my-portfolio-spotify-pc.png',
            description: [
                'Replica della famosa piattaforma di musica streaming: Spotify Web'
            ],
            skills: [
                "HTML", "CSS", "git", "github"
            ],
            link_github: "https://github.com/dunzolo/html-css-spotifywebp",
            link_website: "https://dunzolo.github.io/html-css-spotifyweb/"
        },
        //Campo Minato
        {
            id: 4,
            title: 'Campo Minato',
            image: '/public/my-portfolio-campo-minato.jpg',
            image_project: '/public/my-portfolio-campo-minato-pc.png',
            description: [
                "Campo Minato è una simulazione del più celebre gioco di Windows \"Prato Fiorito\".",
                "Il computer genera in maniera randomica 16 numeri che saranno equivalenti alla posizione delle bombe all'interno della scacchiera. L'utente potrà cliccare sulle celle fino a quando non troverà uno dei numeri casuali estratti dal computer.",
                "Al termine verrà mostrato il punteggio totale ottenuto dall'utente e le restanti bombe presenti sulla scacchiera.",
                "Ad inizio gioco l'utente potrà selezionare 3 diverse difficoltà che riduranno il numero totale di celle sulla scacchiera. Sarà possibile ogni volta ricominciare il gioco dall'inizio selezionando la difficoltà che si preferisce."
            ],
            skills: [
                "HTML", "CSS", "Javascript", "git", "github"
            ],
            link_github: "https://github.com/dunzolo/js-campominato-dom",
            link_website: "https://dunzolo.github.io/js-campominato-dom/"
        },
        //Torneo M.Pezza RiverNiviano
        {
            id: 5,
            title: 'Torneo RiverNiviano',
            image: '/public/my-portfolio-riverniviano.jpg',
            image_project: '/public/my-portfolio-riverniviano-pc.png',
            description: [
                "Torneo RiverNiviano: elenco partite suddivise per categoria con rispettive classifiche e risultati",
                "Nella pagina principale sarà possibile filtrare tramite dei pulsanti la categoria che vi interessa visualizzare, evitando di avere tutto il calendario completo. Per tornare alla visualizzazione completa, basterà schiacciare sulla categoria appena selezionata",
                "Dall'hamburger menù posizionato in alto a destra sarà sempre possibile accedere alle classifiche di ogni categoria ed alla sezione contatti"
            ],
            skills: [
                "HTML", "CSS", "Javascript", "Bootstrap", "VueJS", "sass", "git", "github"
            ],
            link_github: "https://github.com/dunzolo/riverniviano",
            link_website: "https://dunzolo.github.io/riverniviano/"
        },
        //Midterm Project VueJS
        {
            id: 6,
            title: 'Avada Restaurant',
            image: '/public/my-portfolio-proj-vuejs.jpg',
            image_project: '/public/my-portfolio-proj-vuejs-pc.png',
            description: [
                "Replica della parte grafica del sito \"Avada Restaurant\" svolto durante il corso con Boolean"
            ],
            skills: [
                "HTML", "CSS", "Javascript", "Bootstrap", "VueJS", "sass", "git", "github"
            ],
            link_github: "https://github.com/dunzolo/proj-html-vuejs",
            link_website: "https://avada-restaurant-dunzolo.netlify.app/"
        },
    ]
})