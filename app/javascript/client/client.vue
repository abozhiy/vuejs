<template lang='pug'>
    q-layout(view="hHh lpR fFf")
        q-header
            navbar(:parentData="{path: path}")
        q-page-container
            p(v-html="message")
        q-drawer(show-if-above v-model="left" side="left" bordered)
</template>

<script>
    import Navbar from '../shared/navbar.vue'
    // import Dashboard from "./dashboard";

    export default {
        data: function () {
            return {
                message: "Hello client!",
                path: '/client/clients'
            }
        },
        components: {
            Navbar
            // Dashboard
        }
    }
</script>

<style lang='scss'>
    p {
        font-size: 2em;
        text-align: center;
    }
</style>