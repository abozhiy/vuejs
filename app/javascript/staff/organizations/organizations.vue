<template lang='pug'>
  div(class="q-pa-md")
    div(class="q-pa-md")
      search-all-filter
    q-btn(outline color="secondary" label="Add organization" @click="handlingOrganization({}, 'addOrganization')")
    q-btn(outline color="secondary" label="Back to Dashboard" @click="toDashboard")

    q-table(ref="org_table" title="Organizations:"
            :loading="loading"
            :data="org_table.data"
            :columns="org_table.columns"
            :pagination.sync="org_table.pagination"
            :filter="searchAllFilter"
            row-key="name" @request="onRequest" @click="refresh" binary-state-sort)
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

    router-view(name="add_organization" v-on:update-org-list="refresh")
    router-view(name="edit_organization" v-on:update-org-list="refresh")

</template>


<script>
  import {backend} from '../api/index.js'
  import searchAllFilter from '../../shared/filters/searchAll'

  export default {
    data: function () {
      return {
        loading:                    false,
        path:                       this.$store.state.organizations_path,
        clients_path:               this.$store.state.clients_path,
        client_table_data:          []
      }
    },

    computed: {
      searchAllFilter() {
        return this.$store.state.search_all_filter
      },

      org_table() {
        return this.$store.state.org_table
      }
    },

    components: {
      searchAllFilter
    },

    methods: {

      refresh() {
        this.$refs.org_table.requestServerInteraction()
      },

      onRequest (props) {
        let params = props.pagination
        params.filter = props.filter

        this.getOrgCollection(this.path, params)
      },

      toDashboard() {
        this.$router.push({ name: 'Dashboard' })
      },

      getOrgCollection(path, params) {
        this.loading = true
        backend.staffs.index(path, { params: {table: params} })
        .then(({ data }) => {
          this.$store.commit('updateOrganizationTablePagination', data)
          this.loading = false
        })
        .catch((error) => {
          console.log(error)
        })
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
          this.refresh()
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
      },
    },

    channels: {
      OrganizationsChannel: {
        connected() {
          console.log('I am connected to channel "organizations".');
        },
        received(data) {
          this.refresh()
        }
      }
    },

    created() {
      this.onRequest({
        pagination: this.org_table.pagination,
        filter: this.searchAllFilter
      })
      this.getCollection(this.clients_path, 'client_table_data')
    },

    mounted() {
      this.$cable.subscribe({ channel: 'OrganizationsChannel' });
    }
  }
</script>