<template lang='pug'>

  div
    div(class="q-pa-md")
      q-btn(outline color="secondary" label="Add organization" @click="addNewInstance(parentData.organization_path, 'addOrganization')")
      q-table(title="Organizations:" :data="organization_table_data" :columns="organization_columns" row-key="name")
        q-td(slot="body-cell-action" slot-scope="props" :props="props")
          q-btn-dropdown(color="primary" label="Actions")
            q-list
              q-item(clickable v-close-popup='1' @click="showInstance(props.row, parentData.organization_path, 'showOrganization')")
                q-item-section
                  q-item-label Show

              q-item(clickable v-close-popup='1' @click="editInstance(props.row, parentData.organization_path, 'editOrganization')")
                q-item-section
                  q-item-label Edit

              q-item(clickable v-close-popup='1' @click="deleteInstance(props.row.id, parentData.organization_path, 'organization_table_data')")
                q-item-section
                  q-item-label Delete


    div(class="q-pa-md")
      q-btn(outline color="secondary" label="Add client" @click="addNewInstance(parentData.client_path, 'addClient')")
      q-table(title="Clients:" :data="client_table_data" :columns="client_columns" row-key="name")
        q-td(slot="body-cell-action" slot-scope="props" :props="props")
          q-btn-dropdown(color="primary" label="Actions")
            q-list
              q-item(clickable v-close-popup='1' @click="showInstance(props.row, parentData.client_path, 'showClient')")
                q-item-section
                  q-item-label Show

              q-item(clickable v-close-popup='1' @click="editInstance(props.row, parentData.client_path, 'editClient')")
                q-item-section
                  q-item-label Edit

              q-item(clickable v-close-popup='1' @click="deleteInstance(props.row.id, parentData.client_path, 'client_table_data')")
                q-item-section
                  q-item-label Delete


    div(class="q-pa-md")
      q-btn(outline color="secondary" label="Add staff" @click="addNewInstance(parentData.path, 'addStaff')")
      q-table(title="Staffs:" :data="staff_table_data" :columns="staff_columns" row-key="name")
        q-td(slot="body-cell-action" slot-scope="props" :props="props")
          q-btn-dropdown(color="primary" label="Actions")
            q-list
              q-item(clickable v-close-popup='1' @click="showInstance(props.row, parentData.path, 'showStaff')")
                q-item-section
                  q-item-label Show

              q-item(clickable v-close-popup='1' @click="editInstance(props.row, parentData.path, 'editStaff')")
                q-item-section
                  q-item-label Edit

              q-item(clickable v-close-popup='1' @click="deleteInstance(props.row.id, parentData.path, 'staff_table_data')")
                q-item-section
                  q-item-label Delete

    router-view(name="add_organization" v-on:update-org-list="getCollection(parentData.organization_path, 'organization_table_data')")
    router-view(name="edit_organization" v-on:update-org-list="getCollection(parentData.organization_path, 'organization_table_data')")

    router-view(name="add_client" v-on:update-client-list="getCollection(parentData.client_path, 'client_table_data')")
    router-view(name="edit_client" v-on:update-client-list="getCollection(parentData.client_path, 'client_table_data')")

    router-view(name="add_staff" v-on:update-staff-list="getCollection(parentData.path, 'staff_table_data')")
    router-view(name="edit_staff" v-on:update-staff-list="getCollection(parentData.path, 'staff_table_data')")
</template>


<script>
  import {backend} from './api/index.js'

  export default {
    data: function () {
      return {
        organization_columns: [
          {name: 'id', label: 'Id', field: 'id', sortable: true},
          {name: 'org_name', label: 'Name', field: 'name', sortable: true},
          {name: 'org_type', label: 'Type', field: 'org_type', sortable: true},
          {name: 'inn', label: 'INN', field: 'inn', sortable: true},
          {name: 'ogrn', label: 'OGRN', field: 'ogrn', sortable: true},
          {name: 'action', label: '', field: 'action'}
        ],
        organization_table_data: [],
        client_columns: [
          {name: 'id', label: 'Id', field: 'id', sortable: true},
          {name: 'fullname', label: 'Fullname', field: 'fullname', sortable: true},
          {name: 'email', label: 'Email', field: 'email', sortable: true},
          {name: 'phone', label: 'Phone', field: 'phone', sortable: true},
          {name: 'action', label: '', field: 'action'}
        ],
        client_table_data: [],
        staff_columns: [
          {name: 'id', label: 'Id', field: 'id', sortable: true},
          {name: 'fullname', label: 'Fullname', field: 'fullname', sortable: true},
          {name: 'email', label: 'Email', field: 'email', sortable: true},
          {name: 'phone', label: 'Phone', field: 'phone', sortable: true},
          {name: 'action', label: '', field: 'action'}
        ],
        staff_table_data: []
      }
    },
    components: {
    },
    props: {
      parentData: Object
    },
    methods: {

      getCollection(path, table_data) {
        backend.staffs.index(path)
        .then((response) => {
          this[table_data] = response.data
        })
        .catch((error) => {
          console.log(error)
        })
      },

      showInstance(params, path, route_name) {
        params.path = path
        this.$router.push({ name: route_name, params: params })
      },

      addNewInstance(path, route_name) {
        let params = {
          path: path
        }
        this.$router.push({ name: route_name, params: params })
      },

      editInstance(params, path, route_name) {
        params.path = path
        this.$router.push({ name: route_name, params: params })
      },

      deleteInstance(id, path, table_data) {
        backend.staffs.destroy(path, id)
        .then((response) => {
          this.getCollection(path, table_data)
        })
        .catch((error) => {
          console.log(error)
        })
      },

    },
    created() {
      this.getCollection(this.parentData.client_path, 'client_table_data')
      this.getCollection(this.parentData.organization_path, 'organization_table_data')
      this.getCollection(this.parentData.path, 'staff_table_data')
    }
  }
</script>


<style lang='scss'>
  li {
    font-size: 1em;
  }
</style>