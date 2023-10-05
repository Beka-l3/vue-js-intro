<template>
    <div class="container">
        <h1>Page Title</h1>
        <p>Content</p>
    </div>
</template>

<script>
export default {
    props: {
        page: {
            type: Object,
            default(rawProps) {
                return {
                    pageTitle: '',
                    content: ''
                };
            }
        }
    }
}
</script>