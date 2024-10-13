<script>
export default {
    data() {
        return {
            name: "John doe",
            status: "active",
            tasks: ["taks-1", "task-2", "task-3"],
            link: "https://google.com"
        }
    },

    methods: {
        toggleStatus() {
            if (this.status === "active") {
                this.status = "pending"
            } else if (this.status === "pending") {
                this.status = "deactive"
            } else {
                this.status = "active"
            }
        }
    },
}
</script>

<template>
    <h1>{{ name }}</h1>
    <p v-if="status === 'active'">User is active</p>
    <p v-else-if="status === 'pending'">User is pending</p>
    <p v-else>User not active</p>

    <ul>
        <li v-for="(task, index) in tasks" :key="task">{{ task }}</li>
    </ul>
    <br>
    <a v-bind:href="link">Click for google</a>
    <br>
    <a :href="link">Click for google</a>
    <br>
    <br>
    <!-- <button v-on:click="toggleStatus">toggle Status</button> -->
    <button @click="toggleStatus">toggle Status</button>

</template>

<style scoped></style>
