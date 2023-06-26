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
            description: 'prima descrizione'
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