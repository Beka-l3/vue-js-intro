<template>
    <p>{{ data.counter }}</p>
    <button @click.prevent="click">Increment</button>
</template>


<script setup>
import {ref, reactive} from 'vue';

const data = reactive({counter: 0});

function click() {
    data.counter++;
}

</script>


<style scoped>


</style>

