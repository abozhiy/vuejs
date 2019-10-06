<template lang='pug'>

  div
    q-drawer(show-if-above side="left" bordered)
      div(class="q-pa-md")
        q-btn(outline color="secondary" label="Organizations" @click="toOrganizationsPath")
      div(class="q-pa-md")
        q-btn(outline color="secondary" label="Clients" @click="toClientsPath")
      div(class="q-pa-md")
        q-btn(outline color="secondary" label="Staffs" @click="toStaffsPath")
      div(class="q-pa-md")
        q-btn(outline color="secondary" label="Equipments" @click="toEquipmentsPath")

    div(class="q-pa-md")
      p(v-html="message")
</template>


<script>
  import {backend} from './api/index.js'

  export default {
    data: function () {
      return {
        message: this.parentData.message
      }
    },
    components: {
    },
    props: {
      parentData: Object
    },
    methods: {

      toOrganizationsPath() {
        this.$router.push({ name: 'Organizations' })
      },

      toClientsPath() {
        this.$router.push({ name: 'Clients' })
      },

      toStaffsPath() {
        this.$router.push({ name: 'Staffs' })
      },

      toEquipmentsPath() {
        this.$router.push({ name: 'Equipments' })
      },

    },
    created() {}
  }
</script>


<style lang='scss'>
  li {
    font-size: 1em;
  }
</style>