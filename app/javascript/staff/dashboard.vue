<template lang='pug'>
    div
        input(v-model="user.fullname" placeholder="fullname")
        br
        input(v-model="user.email" placeholder="email")
        br
        input(v-model="user.phone" placeholder="phone")
        br
        input(v-model="user.password" placeholder="password")
        br
        button(@click="checkValidate") Add Client
        br
        br

        h2 Clients:

        li(v-for="client in clients" :key="client.id")
            span(v-html="getClientFullInfo(client)")
            button(@click="deleteClient(client.id)") Delete
</template>


<script>
    import { backend } from '../api/index.js'

    export default {
        data: function () {
            return {
                user: {
                    fullname: '',
                    email: '',
                    phone: '',
                    password: ''
                },
                clients: []
            }
        },
        props: {
            parentData: Object
        },
        methods: {
            checkFullname(fullname) {
                return fullname.length > 0 && fullname.length < 5;
            },
            checkEmail(email) {
                let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return regex.test(String(email).toLowerCase());
            },
            checkPhone(phone) {
                let regex = /^\d+$/;
                return regex.test(String(phone));
            },
            checkPassword(password) {
                return password.length >= 4;
            },

            getClientsCollection() {

                backend.records.index(this.parentData.client_path)
                .then((response) => {
                    // console.log(response.data)
                    this.clients = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
            },

            getClientFullInfo(client) {
                return client.fullname + ' / ' + client.email + ' / ' + client.phone
            },

            checkValidate() {
                let params = {
                    fullname: this.user.fullname,
                    email: this.user.email,
                    phone: this.user.phone,
                    password: this.user.password
                }

                if (!this.checkFullname(params.fullname)) {
                    alert('Fullname field must not contain more than 5 characters')
                } else if (!this.checkEmail(params.email)) {
                    alert('Email must be in the form test@test.com')
                } else if (!this.checkPhone(params.phone)) {
                    alert('Phone must contain only numbers')
                } else if (!this.checkPassword(params.password)) {
                    alert('Password must contain at least 4 characters')
                } else {
                    this.addClient(params)
                }
            },

            addClient(params) {
                backend.records.create(this.parentData.client_path, params)
                .then((response) => {
                    // console.log(response)
                    this.user.fullname = ''
                    this.user.email = ''
                    this.user.phone = ''
                    this.user.password = ''
                    this.getClientsCollection()
                })
                .catch((error) => {
                    console.log(error)
                })
            },

            deleteClient(id) {
              backend.records.destroy(this.parentData.client_path, id)
              .then((response) => {
                this.getClientsCollection()
              })
              .catch((error) => {
                console.log(error)
              })
            }
        },
        created() {
            this.getClientsCollection()
        }
    }
</script>


<style lang='scss'>
    li {
        font-size: 1em;
    }
</style>