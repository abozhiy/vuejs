<template lang='pug'>
  div(class="q-pa-md")
    q-btn(outline color="secondary" label="Add staff" @click="handlingInstance({}, path, 'addStaff')")
    q-btn(outline color="secondary" label="Back to Dashboard" @click="toDashboard")
    q-table(title="Staffs:" :data="staff_table_data" :columns="staff_columns" row-key="name")
      q-td(slot="body-cell-action" slot-scope="props" :props="props")
        q-btn-dropdown(color="primary" label="Actions")
          q-list
            q-item(clickable v-close-popup='1' @click="handlingInstance(props.row, path, 'showStaff')")
              q-item-section
                q-item-label Show

            q-item(clickable v-close-popup='1' @click="handlingInstance(props.row, path, 'editStaff')")
              q-item-section
                q-item-label Edit

            q-item(clickable v-close-popup='1' @click="deleteInstance(props.row.id, path, 'staff_table_data')")
              q-item-section
                q-item-label Delete

    router-view(name="add_staff" v-on:update-staff-list="getCollection(path, 'staff_table_data')")
    router-view(name="edit_staff" v-on:update-staff-list="getCollection(path, 'staff_table_data')")
</template>


<script>
  import {backend} from '../api/index.js'

  export default {
    data: function () {
      return {
        path: '/staff/staffs',
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
    },
    created() {
      this.getCollection(this.path, 'staff_table_data')
    }
  }
</script>