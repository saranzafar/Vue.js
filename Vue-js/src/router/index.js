import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/views/Home.vue";
import JobsView from "@/components/views/JobsView.vue";
import NotFoundView from "@/components/views/NotFoundView.vue";
import JobView from "@/components/views/JobView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/jobs",
            name: "jobs",
            component: JobsView
        },
        {
            path: "/jobs/:id",
            name: "job",
            component: JobView
        },
        {
            path: "/:catchAll(.*)",
            name: "not-found",
            component: NotFoundView
        }
    ]
})

export default router
