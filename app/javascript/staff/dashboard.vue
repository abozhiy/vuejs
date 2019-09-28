<template lang='pug'>
    //div
        div(class='add-client-form' style="max-width: 300px")
            q-input(outlined v-model="user.fullname" label="fullname")
            q-input(outlined v-model="user.email" label="email")
            q-input(outlined v-model="user.phone" label="phone")
            q-input(outlined v-model="user.password" label="password")
            q-btn(outline color="secondary" label="Add Client" size='sm' @click="checkValidate")

        div(class='clients-list' style="max-width: 500px")
            h3 Clients:
            q-list(highlight separator)
                q-item(v-for="client in clients" :key="client.id" highlight separator)
                    q-item-section
                        q-item-label(v-html="client.fullname")
                        q-item-label(v-html="getClientFullInfo(client)")
                    q-btn(outline color="secondary" label="Delete" size='xs' @click="deleteClient(client.id)")

    div
        div(class='add-organization-form' style="max-width: 300px")
            q-input(outlined v-model="organization.name" label="name")
            q-input(outlined v-model="organization.org_type" label="type")
            q-input(outlined v-model="organization.inn" label="inn")
            q-input(outlined v-model="organization.ogrn" label="ogrn")
            q-btn(outline color="secondary" label="Add organization" size='sm' @click="addOrganization")

        div(class='organizations-table')
            h3 Organizations:
            q-list(highlight separator)
                q-item(v-for="organization in organizations" :key="organization.id" highlight separator)
                    q-item-section
                        q-item-label(v-html="organization.name")
                        q-item-label(v-html="getOrganizationFullInfo(organization)")
                    q-btn(outline color="secondary" label="Delete" size='xs' @click="deleteOrganization(organization.id)")

</template>


<script>
    import { backend } from '../api/index.js'

    export default {
        data: function () {
            return {
                // user: {
                //     fullname: '',
                //     email: '',
                //     phone: '',
                //     password: ''
                // },
                // clients: [],
                organization: {
                    name: '',
                    org_type: '',
                    inn: '',
                    ogrn: ''
                },
                organizations: []
            }
        },
        props: {
            parentData: Object
        },
        methods: {

            addOrganization() {
                let params = {
                    name: this.organization.name,
                    org_type: this.organization.org_type,
                    inn: this.organization.inn,
                    ogrn: this.organization.ogrn
                }

                backend.records.create(this.parentData.organization_path, params)
                .then((response) => {
                    // console.log(response)
                    this.organization.name = ''
                    this.organization.org_type = ''
                    this.organization.inn = ''
                    this.organization.ogrn = ''
                    this.getOrganizationsCollection()
                })
                .catch((error) => {
                    console.log(error)
                })
            },

            getOrganizationsCollection() {
                backend.records.index(this.parentData.organization_path)
                .then((response) => {
                    // console.log(response.data)
                    this.organizations = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
            },

            getOrganizationFullInfo(organization) {
                return 'Type: ' + organization.org_type + ', INN: ' + organization.inn + ', OGRN: ' + organization.ogrn
            },

            deleteOrganization(id) {
                backend.records.destroy(this.parentData.organization_path, id)
                .then((response) => {
                    this.getOrganizationsCollection()
                })
                .catch((error) => {
                    console.log(error)
                })
            },


            // checkFullname(fullname) {
            //     return fullname.length > 0 && fullname.length < 5;
            // },
            // checkEmail(email) {
            //     let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            //     return regex.test(String(email).toLowerCase());
            // },
            // checkPhone(phone) {
            //     let regex = /^\d+$/;
            //     return regex.test(String(phone));
            // },
            // checkPassword(password) {
            //     return password.length >= 4;
            // },
            //
            // getClientsCollection() {
            //
            //     backend.records.index(this.parentData.client_path)
            //     .then((response) => {
            //         // console.log(response.data)
            //         this.clients = response.data
            //     })
            //     .catch((error) => {
            //         console.log(error)
            //     })
            // },
            //
            // getClientFullInfo(client) {
            //     return 'Email: ' + client.email + ', Phone: ' + client.phone
            // },
            //
            // checkValidate() {
            //     let params = {
            //         fullname: this.user.fullname,
            //         email: this.user.email,
            //         phone: this.user.phone,
            //         password: this.user.password
            //     }
            //
            //     if (!this.checkFullname(params.fullname)) {
            //         alert('Fullname field must not contain more than 5 characters')
            //     } else if (!this.checkEmail(params.email)) {
            //         alert('Email must be in the form test@test.com')
            //     } else if (!this.checkPhone(params.phone)) {
            //         alert('Phone must contain only numbers')
            //     } else if (!this.checkPassword(params.password)) {
            //         alert('Password must contain at least 4 characters')
            //     } else {
            //         this.addClient(params)
            //     }
            // },
            //
            // addClient(params) {
            //     backend.records.create(this.parentData.client_path, params)
            //     .then((response) => {
            //         // console.log(response)
            //         this.user.fullname = ''
            //         this.user.email = ''
            //         this.user.phone = ''
            //         this.user.password = ''
            //         this.getClientsCollection()
            //     })
            //     .catch((error) => {
            //         console.log(error)
            //     })
            // },
            //
            // deleteClient(id) {
            //   backend.records.destroy(this.parentData.client_path, id)
            //   .then((response) => {
            //     this.getClientsCollection()
            //   })
            //   .catch((error) => {
            //     console.log(error)
            //   })
            // }
        },
        created() {
            // this.getClientsCollection()
            this.getOrganizationsCollection()
        }
    }
</script>


<style lang='scss'>
    li {
        font-size: 1em;
    }
</style>