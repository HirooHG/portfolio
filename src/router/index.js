
import { createRouter, createWebHistory } from "vue-router"
import Projects from "@/views/Projects.vue";
import CV from "@/views/CV.vue";

const routes = [
    {
        path: '',
        name: 'Accueil',
        component: CV
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
