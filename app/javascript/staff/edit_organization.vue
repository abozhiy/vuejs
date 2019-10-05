<template lang='pug'>

  div(class="q-pa-md")

    q-dialog(:value="true" @hide="hide")
      q-card(style="width: 500px; max-width: 80vw;")
        q-card-section
          div(class="text-h6") Edit organization

        q-card-section
          q-input(outlined v-model="organization.name" label="name")
          q-input(outlined v-model="organization.org_type" label="type")
          q-input(outlined v-model="organization.inn" label="inn")
          q-input(outlined v-model="organization.ogrn" label="ogrn")
          q-select(outlined v-model="organization.client_ids" multiple :options="clients" label="clients")

        q-card-actions(align="right" class="q-pa-md bg-white text-teal")
          q-btn(outline v-close-popup="1" color="secondary" label="Edit" size='sm' @click="editOrganization")


</template>


<script>
  import {backend} from './api/index.js'

  export default {
    data: function () {
      let params = this.$route.params
      return {
        organization: {
          id: params.id,
          name: params.name,
          org_type: params.org_type,
          inn: params.org_type,
          ogrn: params.org_type,
          client_ids: params.client_ids
        },
        clients: params.clients_for_select
      }
    },
    methods: {

      hide() {
        this.$router.push({ name: 'Dashboard' })
      },

      editOrganization() {
        let params = {
          id: this.organization.id,
          name: this.organization.name,
          org_type: this.organization.org_type,
          inn: this.organization.inn,
          ogrn: this.organization.ogrn,
          client_ids: this.organization.client_ids.map(({ value }) => value)
        }

        backend.staffs.update(this.$route.params.path+'/'+this.$route.params.id, params)
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