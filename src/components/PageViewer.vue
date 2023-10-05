<template>
    <div class="container">
        <h1>Page Title</h1>
        <p>{{ $route.params.index }}</p>
    </div>
</template>

<script>
export default {
    created() {
        // this.$route.params
    }
}
</script>