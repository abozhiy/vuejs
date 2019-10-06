<template lang='pug'>
  div(class="q-pa-md")
    q-btn(outline color="secondary" label="Add organization" @click="handlingOrganization({}, 'addOrganization')")
    q-btn(outline color="secondary" label="Back to Dashboard" @click="toDashboard")
    q-table(title="Organizations:" :data="organization_table_data" :columns="organization_columns" row-key="name")
      q-td(slot="body-cell-action" slot-scope="props" :props="props")
        q-btn-dropdown(color="primary" label="Actions")
          q-list
            q-item(clickable v-close-popup='1' @click="handlingInstance(props.row, path, 'showOrganization')")
              q-item-section
                q-item-label Show

            q-item(clickable v-close-popup='1' @click="handlingOrganization(props.row, 'editOrganization')")
              q-item-section
                q-item-label Edit

            q-item(clickable v-close-popup='1' @click="deleteInstance(props.row.id, path, 'organization_table_data')")
              q-item-section
                q-item-label Delete

    router-view(name="add_organization" v-on:update-org-list="getCollection(path, 'organization_table_data')")
    router-view(name="edit_organization" v-on:update-org-list="getCollection(path, 'organization_table_data')")

</template>


<script>
  import {backend} from '../api/index.js'

  export default {
    data: function () {
      return {
        path: '/organizations',
        clients_path: '/client/clients',
        organization_columns: [
          {name: 'id', label: 'Id', field: 'id', sortable: true},
          {name: 'org_name', label: 'Name', field: 'name', sortable: true},
          {name: 'org_type', label: 'Type', field: 'org_type', sortable: true},
          {name: 'inn', label: 'INN', field: 'inn', sortable: true},
          {name: 'ogrn', label: 'OGRN', field: 'ogrn', sortable: true},
          {name: 'client_ids', label: 'Client_ids', field: 'client_ids', sortable: true},
          {name: 'action', label: '', field: 'action'}
        ],
        organization_table_data: [],
        client_table_data: []
      }
    },
    methods: {

      toDashboard() {
        this.$router.push({ name: 'Dashboard' })
      },

      getCollection(path, table_data) {
        backend.staffs.index(path)
        .then((response) => {
          this[table_data] = response.data
        })
        .catch((error) => {
          console.log(error)
        })
      },

      handlingInstance(params, path, route_name) {
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

      handlingOrganization(row_params, route_name) {
        let clients = this.getCollectionForSelect('client_table_data', 'fullname')
        row_params.clients_for_select = clients
        this.handlingInstance(row_params, this.path, route_name)
      },

      getCollectionForSelect(table, name_field) {
        let arr = []
        this[table].forEach(function (item, key) {
          let params = {}
          params.label = item[name_field]
          params.value = item.id
          arr.push(params)
        })
        return arr
      }
    },
    created() {
      this.getCollection(this.path, 'organization_table_data')
      this.getCollection(this.clients_path, 'client_table_data')
    }
  }
</script>