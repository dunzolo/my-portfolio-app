//1 - importare createRouter e createWebHistory
import { createRouter, createWebHistory } from "vue-router";

//2 - importare le componenti rappresentanti le pagine
import HomePage from './pages/HomePage.vue';

//3 - creo l'oggetto router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        }
    ]
});

//4 - esportare il router
export { router };