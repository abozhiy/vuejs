<!--<template>-->
    <!--<div>-->
        <!--<input v-model="fullname" placeholder="fullname">-->
        <!--<br>-->
        <!--<input v-model="email" placeholder="email">-->
        <!--<br>-->
        <!--<input v-model="phone" placeholder="phone">-->
        <!--<br>-->
        <!--<input v-model="password" placeholder="password">-->
        <!--<br>-->
        <!--<button @click="checkValidate">Add Client</button>-->
        <!--<br>-->
        <!--<br>-->
        <!--<li v-for="client in clients">-->
            <!--{{ client.fullname + ' / ' + client.email + ' / ' + client.phone }}-->
        <!--</li>-->
    <!--</div>-->
<!--</template>-->


<!--<script>-->
    <!--import backend from '../api/index.js'-->

    <!--export default {-->
        <!--data: function () {-->
            <!--return {-->
                <!--fullname: '',-->
                <!--email: '',-->
                <!--phone: '',-->
                <!--password: '',-->
                <!--clients: []-->
            <!--}-->
        <!--},-->
        <!--props: {-->
            <!--parentData: Object-->
        <!--},-->
        <!--methods: {-->
            <!--checkFullname(fullname) {-->
                <!--if (fullname.length > 0 && fullname.length < 5) {-->
                  <!--return true-->
                <!--} else {-->
                  <!--return false-->
                <!--}-->
            <!--},-->
            <!--checkEmail(email) {-->
                <!--let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;-->
                <!--return regex.test(String(email).toLowerCase());-->
            <!--},-->
            <!--checkPhone(phone) {-->
                <!--let regex = /^\d+$/;-->
                <!--return regex.test(String(phone));-->
            <!--},-->
            <!--checkPassword(password) {-->
                <!--if (password.length >= 4) {-->
                    <!--return true-->
                <!--} else {-->
                    <!--return false-->
                <!--}-->
            <!--},-->

            <!--getClientsCollection() {-->
                <!--backend.getCollection('/api/v1' + this.parentData.path)-->
                <!--.then((response) => {-->
                    <!--// console.log(response.data)-->
                    <!--this.clients = response.data-->
                <!--})-->
                <!--.catch((error) => {-->
                    <!--console.log(error)-->
                <!--})-->
            <!--},-->

            <!--checkValidate() {-->
                <!--let params = {-->
                    <!--fullname: this.fullname,-->
                    <!--email: this.email,-->
                    <!--phone: this.phone,-->
                    <!--password: this.password-->
                <!--}-->

                <!--if (!this.checkFullname(params.fullname)) {-->
                    <!--alert('Fullname field must not contain more than 5 characters')-->
                <!--} else if (!this.checkEmail(params.email)) {-->
                    <!--alert('Email must be in the form test@test.com')-->
                <!--} else if (!this.checkPhone(params.phone)) {-->
                    <!--alert('Phone must contain only numbers')-->
                <!--} else if (!this.checkPassword(params.password)) {-->
                    <!--alert('Password must contain at least 4 characters')-->
                <!--} else {-->
                    <!--this.addClient(params)-->
                <!--}-->
            <!--},-->

            <!--addClient(params) {-->
                <!--backend.addNewInstance('/api/v1' + this.parentData.path, params)-->
                <!--.then((response) => {-->
                    <!--// console.log(response)-->
                    <!--this.fullname = ''-->
                    <!--this.email = ''-->
                    <!--this.phone = ''-->
                    <!--this.password = ''-->
                    <!--this.getClientsCollection()-->
                <!--})-->
                <!--.catch((error) => {-->
                    <!--console.log(error)-->
                <!--})-->
            <!--}-->
        <!--},-->
        <!--created() {-->
            <!--this.getClientsCollection()-->
        <!--}-->
    <!--}-->
<!--</script>-->


<!--<style scoped>-->
    <!--li {-->
        <!--font-size: 1em;-->
    <!--}-->
<!--</style>-->