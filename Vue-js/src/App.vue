<script setup>
// Example of composition API 

import { ref, onMounted } from 'vue';

const name = ref("John doe");
const status = ref("active");
const tasks = ref(["taks-1", "task-2", "task-3"]);
const newTask = ref("")


const toggleStatus = () => {
    if (status.value === "active") {
        status.value = "pending"
    } else if (status.value === "pending") {
        status.value = "deactive"
    } else {
        status.value = "active"
    }
}

const addTask = () => {
    if (newTask.value.trim() != "") {
        tasks.value.push(newTask.value);
        newTask.value = ""
    }
}

const deleteTask = (index) => {
    tasks.value.splice(index, 1)
}

onMounted(async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        // console.log("REsponse = ",response.json());

        const data = await response.json()
        tasks.value = data.map((task) => task.title)
    } catch (error) {
        console.log("Error while fetching data: ", error);

    }
})
</script>


<template>
    <h1>{{ name }}</h1>
    <p v-if="status === 'active'">User is active</p>
    <p v-else-if="status === 'pending'">User is pending</p>
    <p v-else>User not active</p>
    <br>
    <form @submit.prevent="addTask">
        <label for="newTask">Add Task</label>
        <input type="text" id="newTask" name="newTask" v-model="newTask">
        <button type="submit">Submit</button>
    </form>
    <br>
    <h3>Tasks: </h3>
    <br>
    <ul>
        <li v-for="(task, index) in tasks" :key="task">
            <span> {{ task }}</span>
            <button @click="deleteTask(index)">Delete</button>
        </li>
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
