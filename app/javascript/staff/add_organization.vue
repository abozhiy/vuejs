<template lang='pug'>

  div(class="q-pa-md")

    q-dialog(:value="true" @hide="hide")
      q-card(style="width: 500px; max-width: 80vw;")
        q-card-section
          div(class="text-h6") Add organization

        q-card-section
          q-input(outlined v-model="organization.name" label="name")
          q-input(outlined v-model="organization.org_type" label="type")
          q-input(outlined v-model="organization.inn" label="inn")
          q-input(outlined v-model="organization.ogrn" label="ogrn")
          q-select(outlined v-model="organization.client_ids" multiple :options="clients" label="clients")

        q-card-actions(align="right" class="q-pa-md bg-white text-teal")
          q-btn(outline v-close-popup="1" color="secondary" label="Add" size='sm' @click="addOrganization")

</template>


<script>
  import {backend} from './api/index.js'

  export default {
    data: function () {
      return {
        organization: {
          name: '',
          org_type: '',
          inn: '',
          ogrn: '',
          client_ids: []
        },
        clients: this.$route.params.clients_for_select
      }
    },
    methods: {

      hide() {
        this.$router.push({ name: 'Dashboard' })
      },

      addOrganization() {
        let params = {
          name: this.organization.name,
          org_type: this.organization.org_type,
          inn: this.organization.inn,
          ogrn: this.organization.ogrn,
          client_ids: this.organization.client_ids.map(({ value }) => value)
        }

        backend.staffs.create(this.$route.params.path, params)
        .then((response) => {
          // console.log(response)
          this.organization.name = ''
          this.organization.org_type = ''
          this.organization.inn = ''
          this.organization.ogrn = ''
          this.client_ids = []
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.$emit('update-org-list')
        })
      },
    }
  }
</script>