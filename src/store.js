import { reactive } from 'vue';

export const store = reactive({
    navOpen: false,

    //icone front-end
    icon_front_end: [
        {
            name: "HTML5",
            icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
        },
        {
            name: "CSS3",
            icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
        },
        {
            name: "Bootstrap",
            icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
        },
        {
            name: "SASS",
            icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
        },
        {
            name: "VueJS",
            icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
        },
        {
            name: "Javascript",
            icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        }
    ],

    //icone back-end
    icon_back_end: [
        {
            name: "PHP",
            icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg"
        },
        {
            name: "Larvel",
            icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg"
        },
        {
            name: "MySQL",
            icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
        }
    ],

    //elenco esperienze
    experiences: [
        {
            title: "Experis Academy",
            name: "Java Developer Trainee",
            period: "Experis Academy | mag 2023 - giu 2023",
            description: "Teoria, esercizi pratici, progetti sul framework <strong>Spring</strong> e linguaggio <strong>Java</strong>",
        },
        {
            title: "Boolean",
            name: "Jr Full Stack Web Developer Trainee",
            period: "Boolean Careers | ott 2022 - mar 2023",
            description: "Durante il percorso con Boolean ho avuto modo di applicare le tecnologie <strong>Front-end</strong> e <strong>Back-end</strong> realizzando partendo da zero, sia in autonomia che in team, vari progetti di sviluppo web.",
        },
        {
            title: "TAIC",
            name: "Responsabile della Produzione",
            period: "T.A.I.C. srl | apr 2016 - set 2022",
            sector: "Settore: <strong>Automazioni elettriche industriali</strong>",
            description:
                "<ul class=\"ps-4\">" +
                "<li>concordare gli impegni in base al programma lavori stabilito</li>" +
                "<li> monitorare e risolvere eventuali problemi legati all\’attività produttiva</li>" +
                "<li>verificare che la quantità e la qualità dei prodotti rispetti le esigenze del cliente</li>" +
                "<li>controllo e gestione ordini materiali di utilizzo</li>" +
                "</ul>"
        },
        {
            title: "Elfo",
            name: "Software Developer Assistant - Stage",
            period: "Elfo srl | gen 2015 - giu 2015",
            sector: "Settore: <strong>Software house</strong>",
            description: "Durante il periodo trascorso ho avuto modo di <strong>sviluppare software</strong> utilizzando il linguaggio <strong>C#</strong> e svolgere attività su database tramite <strong>SQL Server</strong>",
        }

    ],

    //elenco progetti
    projects: [
        //Boolflix
        {
            id: 1,
            title: 'Boolflix',
            image: 'my-portfolio-boolflix.jpg',
            image_project: '/my-portfolio-boolflix-pc.png',
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
            image: 'my-portfolio-boolzapp.jpg',
            image_project: '/my-portfolio-boolzapp-pc.png',
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
            image: 'my-portfolio-spotify.jpg',
            image_project: '/my-portfolio-spotify-pc.png',
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
            image: 'my-portfolio-campo-minato.jpg',
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
            image: 'my-portfolio-riverniviano.jpg',
            image_project: '/my-portfolio-riverniviano-pc.png',
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
            image: 'my-portfolio-proj-vuejs.jpg',
            image_project: '/my-portfolio-proj-vuejs-pc.png',
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