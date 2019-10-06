<template lang='pug'>

  div(class="q-pa-md")

    q-dialog(:value="true" @hide="hide")
      q-card(style="width: 500px; max-width: 80vw;")
        q-card-section
          div(class="text-h6") Edit client

        q-card-section
          q-input(outlined v-model="client.fullname" label="fullname")
          q-input(outlined v-model="client.email" label="email")
          q-input(outlined v-model="client.phone" label="phone")
          q-input(outlined v-model="client.password" label="password")
          q-select(outlined v-model="client.organization_ids" multiple :options="organizations" label="organizations")

        q-card-actions(align="right" class="q-pa-md bg-white text-teal")
          q-btn(outline v-close-popup="1" color="secondary" label="Edit" size='sm' @click="editClient")


</template>


<script>
  import {backend} from '../api/index.js'

  export default {
    data: function () {
      let params = this.$route.params
      return {
        client: {
          id: params.id,
          fullname: params.fullname,
          email: params.email,
          phone: params.phone,
          password: params.password,
          organization_ids: params.organization_ids
        },
        organizations: params.organizations_for_select
      }
    },
    methods: {

      hide() {
        this.$router.push({ name: 'Clients' })
      },

      editClient() {
        let params = {
          id: this.client.id,
          fullname: this.client.fullname,
          email: this.client.email,
          phone: this.client.phone,
          password: this.client.password,
          organization_ids: this.client.organization_ids.map(({ value }) => value)
        }

        backend.staffs.update(this.$route.params.path+'/'+this.$route.params.id, params)
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.$emit('update-client-list')
        })
      },
    }
  }
</script>