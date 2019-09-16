<template>
    <div>
        <navbar :parentData="{path: path}"></navbar>
        <p>{{ message }}</p>
        <dashboard :parentData="{path: path}"></dashboard>
    </div>
</template>

<script>
    import Navbar from '../shared/navbar.vue'
    import Dashboard from "./dashboard";

    export default {
        data: function () {
            return {
                message: "Hello client!",
                path: '/client/clients'
            }
        },
        components: {
            Navbar,
            Dashboard
        }
    }
</script>

<style scoped>
    p {
        font-size: 2em;
        text-align: center;
    }
</style>