<template>
    
    <p>{{ counter }}</p>
    <button @click.prevent="click">Increment</button>
</template>


<script>
export default {
    data() {
        return {
            counter: 0
        };
    },

    methods: {
        click() {
            this.counter++;
        }
    }
}

</script>


<style scoped>


</style>

