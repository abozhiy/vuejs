<template>
    <div>
        <navbar :parentData="{path: path}"></navbar>
        <p>{{ message }}</p>
    </div>
</template>

<script>
    import Navbar from '../shared/navbar.vue'

    export default {
        data: function () {
            return {
                message: "Hello staff!",
                path: '/staff/staffs'
            }
        },
        components: {
            Navbar
        }
    }
</script>

<style scoped>
    p {
        font-size: 2em;
        text-align: center;
    }
</style>
