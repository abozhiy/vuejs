<template lang='pug'>
    div
        div(v-if="loading")
            div(class="window-height window-width row justify-center items-center" style="font-size: 3em")
                q-spinner-audio(color="secondary")

        q-layout(view="hHh lpR fFf")
            q-header
                navbar(:parentData="{path: path, client_path: client_path}")
            q-page-container
                p(v-html="message")
                dashboard(:parentData="{path: path, client_path: client_path}")
            q-drawer(show-if-above side="left" bordered)

</template>

<script>
    import Navbar from '../shared/navbar.vue'
    import Dashboard from "./dashboard";

    export default {
        data: function () {
            return {
                message: "Hello staff!",
                path: '/staff/staffs',
                client_path: '/client/clients',
                loading: true
            }
        },
        components: {
            Navbar,
            Dashboard
        },
        mounted() {
            this.loading = false
        }
    }
</script>

<style lang='scss'>
    p {
        font-size: 2em;
        text-align: center;
    }
</style>
