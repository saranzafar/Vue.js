const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL || '/'),
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
