<template lang='pug'>
  div(class="q-pa-md")
    q-btn(outline color="secondary" label="Add client" @click="handlingClient({}, 'addClient')")
    q-btn(outline color="secondary" label="Back to Dashboard" @click="toDashboard")
    q-table(title="Clients:" :data="client_table_data" :columns="client_columns" row-key="name")
      q-td(slot="body-cell-action" slot-scope="props" :props="props")
        q-btn-dropdown(color="primary" label="Actions")
          q-list
            q-item(clickable v-close-popup='1' @click="handlingInstance(props.row, path, 'showClient')")
              q-item-section
                q-item-label Show

            q-item(clickable v-close-popup='1' @click="handlingClient(props.row, 'editClient')")
              q-item-section
                q-item-label Edit

            q-item(clickable v-close-popup='1' @click="deleteInstance(props.row.id, path, 'client_table_data')")
              q-item-section
                q-item-label Delete

    router-view(name="add_client" v-on:update-client-list="getCollection(path, 'client_table_data')")
    router-view(name="edit_client" v-on:update-client-list="getCollection(path, 'client_table_data')")
</template>


<script>
  import {backend} from '../api/index.js'

  export default {
    data: function () {
      return {
        path:                       this.$store.state.clients_path,
        organizations_path:         this.$store.state.organizations_path,
        client_columns:             this.$store.state.client_columns,
        client_table_data:          [],
        organization_table_data:    []
      }
    },
    methods: {

      toDashboard() {
        this.$router.push({ name: 'Dashboard' })
      },

      getCollection(path, table_data) {
        backend.staffs.index(path, '', '')
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

      handlingClient(row_params, route_name) {
        let organizations = this.getCollectionForSelect('organization_table_data', 'name')
        row_params.organizations_for_select = organizations
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
      this.getCollection(this.path, 'client_table_data')
      this.getCollection(this.organizations_path, 'organization_table_data')
    }
  }
</script>