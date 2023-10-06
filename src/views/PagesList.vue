<template>
    
    <p>{{ counter }}</p>
    <button @click.prevent="click">Increment</button>
</template>


<script setup>
import {ref, reactive} from 'vue';

const counter = ref(0);

function Increment() {
    counter++;
}



// export default {
//     data() {
//         return {
//             counter: 0
//         };
//     },

//     methods: {
//         click() {
//             this.counter++;
//         }
//     }
// }

</script>


<style scoped>


</style>

