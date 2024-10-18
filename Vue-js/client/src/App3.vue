<script setup>
import { ref, onMounted } from 'vue';

const name = ref("John Doe");
const status = ref("active");
const tasks = ref(["task-1", "task-2", "task-3"]);
const newTask = ref("");
const link = ref("https://www.google.com");

const toggleStatus = () => {
    if (status.value === "active") {
        status.value = "pending";
    } else if (status.value === "pending") {
        status.value = "deactive";
    } else {
        status.value = "active";
    }
};

const addTask = () => {
    if (newTask.value.trim() !== "") {
        tasks.value.push(newTask.value);
        newTask.value = "";
    }
};

const deleteTask = (index) => {
    tasks.value.splice(index, 1);
};

onMounted(async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        tasks.value = data.map((task) => task.title);
    } catch (error) {
        console.log("Error while fetching data: ", error);
    }
});
</script>

<template>
    <div class="container mx-auto p-8 bg-gray-50 min-h-screen">
        <h1 class="text-4xl font-bold text-center mb-8">{{ name }}</h1>

        <!-- Status -->
        <div class="text-center mb-6">
            <p v-if="status === 'active'" class="text-green-600 text-lg mb-2">User is active</p>
            <p v-else-if="status === 'pending'" class="text-yellow-600 text-lg mb-2">User is pending</p>
            <p v-else class="text-red-600 text-lg mb-2">User not active</p>

            <button @click="toggleStatus"
                class="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300">
                Toggle Status
            </button>
        </div>

        <!-- Form -->
        <form @submit.prevent="addTask" class="mb-8">
            <div class="flex flex-col gap-4 max-w-md mx-auto">
                <label for="newTask" class="text-lg font-medium">Add Task</label>
                <input type="text" id="newTask" v-model="newTask"
                    class="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    placeholder="Enter a new task" />
                <button type="submit"
                    class="bg-teal-600 text-white p-2 hover:bg-teal-700 rounded-md font-medium transition duration-300">
                    Submit
                </button>
            </div>
        </form>

        <!-- Tasks List -->
        <h3 class="text-2xl font-semibold mb-4">Tasks:</h3>
        <ul class="space-y-4">
            <li v-for="(task, index) in tasks" :key="task"
                class="flex justify-between items-center p-4 bg-white shadow-md rounded-md">
                <span class="text-lg">{{ task }}</span>
                <button @click="deleteTask(index)"
                    class="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-300">
                    Delete
                </button>
            </li>
        </ul>

        <!-- Link and Button -->
        <div class="mt-8 flex flex-col items-center gap-4">
            <a :href="link" class="text-teal-600 underline hover:text-teal-800 transition duration-300">
                Click for Google
            </a>
        </div>
    </div>
</template>
