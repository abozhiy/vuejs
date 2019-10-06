<template lang='pug'>
  div(class="q-pa-md")
    q-btn(outline color="secondary" label="Add equipment" @click="handlingEquipment({}, 'addEquipment')")
    q-btn(outline color="secondary" label="Back to Dashboard" @click="toDashboard")
    q-table(title="Equipments:" :data="equipment_table_data" :columns="equipment_columns" row-key="name")
      q-td(slot="body-cell-action" slot-scope="props" :props="props")
        q-btn-dropdown(color="primary" label="Actions")
          q-list
            q-item(clickable v-close-popup='1' @click="handlingInstance(props.row, path, 'showEquipment')")
              q-item-section
                q-item-label Show

            q-item(clickable v-close-popup='1' @click="handlingEquipment(props.row, 'editEquipment')")
              q-item-section
                q-item-label Edit

            q-item(clickable v-close-popup='1' @click="deleteInstance(props.row.id, path, 'equipment_table_data')")
              q-item-section
                q-item-label Delete

    router-view(name="add_equipment" v-on:update-equipment-list="getCollection(path, 'equipment_table_data')")
    router-view(name="edit_equipment" v-on:update-equipment-list="getCollection(path, 'equipment_table_data')")
</template>


<script>
  import {backend} from '../api/index.js'

  export default {
    data: function () {
      return {
        path: '/equipments',
        organizations_path: '/organizations',
        equipment_columns: [
          {name: 'id', label: 'Id', field: 'id', sortable: true},
          {name: 'title', label: 'Title', field: 'title', sortable: true},
          {name: 'equipment_type', label: 'Type', field: 'equipment_type', sortable: true},
          {name: 'serial_num', label: 'Serial №', field: 'serial_num', sortable: true},
          {name: 'organization_id', label: 'Organization id', field: 'organization_id', sortable: true},
          {name: 'action', label: '', field: 'action'}
        ],
        equipment_table_data: [],
        organization_table_data: []
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

      handlingEquipment(row_params, route_name) {
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
      this.getCollection(this.path, 'equipment_table_data')
      this.getCollection(this.organizations_path, 'organization_table_data')
    }
  }
</script>