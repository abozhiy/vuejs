<template lang='pug'>
  div(class="q-pa-md")
    div(class="q-pa-md")
      sort-all-option(:parentData="{options: this.options_for_sorting}")
      search-all-filter
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
  import searchAllFilter from '../../shared/filters/searchAll'
  import sortAllOption from '../../shared/sorting/sortAll'

  export default {
    data: function () {
      return {
        options_for_sorting:        ['name', 'inn', 'ogrn'],
        path:                       this.$store.state.organizations_path,
        clients_path:               this.$store.state.clients_path,
        organization_columns:       this.$store.state.organization_columns,
        organization_table_data:    [],
        client_table_data:          []
      }
    },
    computed: {
      searchAllFilter() {
        let filter = this.$store.state.search_all_filter
        // console.log(filter)
        return filter
      },

      sortAllOption() {
        return this.$store.state.sort_all_option
      }
    },
    watch: {
      searchAllFilter(val) {
        this.getCollection(this.path, 'organization_table_data')
      },

      sortAllOption(val) {
        this.getCollection(this.path, 'organization_table_data')
      }
    },
    components: {
      searchAllFilter,
      sortAllOption
    },
    methods: {

      toDashboard() {
        this.$router.push({ name: 'Dashboard' })
      },

      getCollection(path, table_data) {
        let filter = this.searchAllFilter
        let sort = this.sortAllOption

        backend.staffs.index(path, filter, sort)
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
    channels: {
      OrganizationsChannel: {
        connected() {
          console.log('I am connected to channel "organizations".');
        },
        received(data) {
          this.getCollection(this.path, 'organization_table_data')
        }
      }
    },
    created() {
      this.getCollection(this.path, 'organization_table_data')
      this.getCollection(this.clients_path, 'client_table_data')
    },
    mounted() {
      this.$cable.subscribe({ channel: 'OrganizationsChannel' });
    }
  }
</script>