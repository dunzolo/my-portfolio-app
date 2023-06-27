//1 - importare createRouter e createWebHistory
import { createRouter, createWebHistory } from "vue-router";

//2 - importare le componenti rappresentanti le pagine
import HomePage from './pages/HomePage.vue';
import SingleProject from './pages/SingleProject.vue'

//3 - creo l'oggetto router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/project/:id',
            name: 'project',
            component: SingleProject,
        }
    ],
    // scrollBehavior(to, from, savedPosition) {
    //     if (to.hash) {
    //         return {
    //             el: to.hash,
    //         }

    //     }
    // },
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            // this.app.$scrollTo(to.hash, 700);
            return { el: to.hash, }
        } else {
            //When the route changes, the page should scroll back to the top.
            // this.app.$scrollTo('#app', 700);
            return {
                top: 0,
                behavior: "instant"
            }
        }
    }
});

//4 - esportare il router
export { router };