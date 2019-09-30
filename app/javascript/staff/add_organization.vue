<template lang='pug'>

  div(class='q-pa-md add-organization-form' style="max-width: 300px")
    q-input(outlined v-model="organization.name" label="name")
    q-input(outlined v-model="organization.org_type" label="type")
    q-input(outlined v-model="organization.inn" label="inn")
    q-input(outlined v-model="organization.ogrn" label="ogrn")
    q-btn(outline color="secondary" label="Add organization" size='sm' @click="addOrganization")

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
          ogrn: ''
        }
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

        backend.staffs.create(this.parentData.organization_path, params)
        .then((response) => {
          // console.log(response)
          this.organization.name = ''
          this.organization.org_type = ''
          this.organization.inn = ''
          this.organization.ogrn = ''
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