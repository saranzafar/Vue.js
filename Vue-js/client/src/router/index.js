import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/views/Home.vue";
import JobsView from "@/components/views/JobsView.vue";
import NotFoundView from "@/components/views/NotFoundView.vue";
import JobView from "@/components/views/JobView.vue";
import AddJobView from "@/components/views/AddJobView.vue";
import EditJobView from "@/components/views/EditJobView.vue";

const router = createRouter({
    history: createWebHistory("/"),
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
            path: "/jobs/add",
            name: "add-job",
            component: AddJobView
        },
        {
            path: "/jobs/:id",
            name: "job",
            component: JobView
        },
        {
            path: "/jobs/edit/:id",
            name: "edit-job",
            component: EditJobView
        },
        {
            path: "/:catchAll(.*)",
            name: "not-found",
            component: NotFoundView
        }
    ]
})

export default router