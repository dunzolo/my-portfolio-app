import { reactive } from 'vue';

export const store = reactive({
    navOpen: false,

    //elenco progetti
    projects: [
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
            link_github: "https://github.com/dunzolo/vite-boolflix"
        },
        {
            id: 2,
            title: 'Boolflix',
            image: '/public/my-portfolio-boolflix.jpg',
            image_project: '/public/my-portfolio-boolflix-pc.png',
            description: 'seconda descrizione'
        },
        {
            id: 3,
            title: 'Boolflix',
            image: '/public/my-portfolio-boolflix.jpg',
            image_project: '/public/my-portfolio-boolflix-pc.png',
            description: 'terza descrizione'
        }
    ]
})