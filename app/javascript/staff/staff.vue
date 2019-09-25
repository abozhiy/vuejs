<template>
    <div>
        <navbar :parentData="{path: path, client_path: client_path}"></navbar>
        <p>{{ message }}</p>
        <dashboard :parentData="{path: path, client_path: client_path}"></dashboard>
    </div>
</template>

<script>
    import Navbar from '../shared/navbar.vue'
    import Dashboard from "./dashboard";

    export default {
        data: function () {
            return {
                message: "Hello staff!",
                path: '/staff/staffs',
                client_path: '/client/clients'
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
