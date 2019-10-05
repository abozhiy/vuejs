<template lang='pug'>

  div
    div(class="q-pa-md")
      q-btn(outline color="secondary" label="Add organization" @click="handlingOrganization({}, 'addOrganization')")
      q-table(title="Organizations:" :data="organization_table_data" :columns="organization_columns" row-key="name")
        q-td(slot="body-cell-action" slot-scope="props" :props="props")
          q-btn-dropdown(color="primary" label="Actions")
            q-list
              q-item(clickable v-close-popup='1' @click="handlingInstance(props.row, parentData.organization_path, 'showOrganization')")
                q-item-section
                  q-item-label Show

              q-item(clickable v-close-popup='1' @click="handlingOrganization(props.row, 'editOrganization')")
                q-item-section
                  q-item-label Edit

              q-item(clickable v-close-popup='1' @click="deleteInstance(props.row.id, parentData.organization_path, 'organization_table_data')")
                q-item-section
                  q-item-label Delete


    div(class="q-pa-md")
      q-btn(outline color="secondary" label="Add client" @click="handlingClient({}, 'addClient')")
      q-table(title="Clients:" :data="client_table_data" :columns="client_columns" row-key="name")
        q-td(slot="body-cell-action" slot-scope="props" :props="props")
          q-btn-dropdown(color="primary" label="Actions")
            q-list
              q-item(clickable v-close-popup='1' @click="handlingInstance(props.row, parentData.client_path, 'showClient')")
                q-item-section
                  q-item-label Show

              q-item(clickable v-close-popup='1' @click="handlingClient(props.row, 'editClient')")
                q-item-section
                  q-item-label Edit

              q-item(clickable v-close-popup='1' @click="deleteInstance(props.row.id, parentData.client_path, 'client_table_data')")
                q-item-section
                  q-item-label Delete


    div(class="q-pa-md")
      q-btn(outline color="secondary" label="Add staff" @click="handlingInstance({}, parentData.path, 'addStaff')")
      q-table(title="Staffs:" :data="staff_table_data" :columns="staff_columns" row-key="name")
        q-td(slot="body-cell-action" slot-scope="props" :props="props")
          q-btn-dropdown(color="primary" label="Actions")
            q-list
              q-item(clickable v-close-popup='1' @click="handlingInstance(props.row, parentData.path, 'showStaff')")
                q-item-section
                  q-item-label Show

              q-item(clickable v-close-popup='1' @click="handlingInstance(props.row, parentData.path, 'editStaff')")
                q-item-section
                  q-item-label Edit

              q-item(clickable v-close-popup='1' @click="deleteInstance(props.row.id, parentData.path, 'staff_table_data')")
                q-item-section
                  q-item-label Delete


    div(class="q-pa-md")
      q-btn(outline color="secondary" label="Add equipment" @click="handlingEquipment({}, 'addEquipment')")
      q-table(title="Equipments:" :data="equipment_table_data" :columns="equipment_columns" row-key="name")
        q-td(slot="body-cell-action" slot-scope="props" :props="props")
          q-btn-dropdown(color="primary" label="Actions")
            q-list
              q-item(clickable v-close-popup='1' @click="handlingInstance(props.row, parentData.equipment_path, 'showEquipment')")
                q-item-section
                  q-item-label Show

              q-item(clickable v-close-popup='1' @click="handlingEquipment(props.row, 'editEquipment')")
                q-item-section
                  q-item-label Edit

              q-item(clickable v-close-popup='1' @click="deleteInstance(props.row.id, parentData.equipment_path, 'equipment_table_data')")
                q-item-section
                  q-item-label Delete

    router-view(name="add_organization" v-on:update-org-list="getCollection(parentData.organization_path, 'organization_table_data')")
    router-view(name="edit_organization" v-on:update-org-list="getCollection(parentData.organization_path, 'organization_table_data')")

    router-view(name="add_client" v-on:update-client-list="getCollection(parentData.client_path, 'client_table_data')")
    router-view(name="edit_client" v-on:update-client-list="getCollection(parentData.client_path, 'client_table_data')")

    router-view(name="add_staff" v-on:update-staff-list="getCollection(parentData.path, 'staff_table_data')")
    router-view(name="edit_staff" v-on:update-staff-list="getCollection(parentData.path, 'staff_table_data')")

    router-view(name="add_equipment" v-on:update-equipment-list="getCollection(parentData.equipment_path, 'equipment_table_data')")
    router-view(name="edit_equipment" v-on:update-equipment-list="getCollection(parentData.equipment_path, 'equipment_table_data')")
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
          {name: 'client_ids', label: 'Client_ids', field: 'client_ids', sortable: true},
          {name: 'action', label: '', field: 'action'}
        ],
        organization_table_data: [],
        client_columns: [
          {name: 'id', label: 'Id', field: 'id', sortable: true},
          {name: 'fullname', label: 'Fullname', field: 'fullname', sortable: true},
          {name: 'email', label: 'Email', field: 'email', sortable: true},
          {name: 'phone', label: 'Phone', field: 'phone', sortable: true},
          {name: 'organization_ids', label: 'Organization_ids', field: 'organization_ids', sortable: true},
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
        staff_table_data: [],
        equipment_columns: [
          {name: 'id', label: 'Id', field: 'id', sortable: true},
          {name: 'title', label: 'Title', field: 'title', sortable: true},
          {name: 'equipment_type', label: 'Type', field: 'equipment_type', sortable: true},
          {name: 'serial_num', label: 'Serial №', field: 'serial_num', sortable: true},
          {name: 'organization_id', label: 'Organization id', field: 'organization_id', sortable: true},
          {name: 'action', label: '', field: 'action'}
        ],
        equipment_table_data: [],
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
        this.handlingInstance(row_params, this.parentData.equipment_path, route_name)
      },

      handlingClient(row_params, route_name) {
        let organizations = this.getCollectionForSelect('organization_table_data', 'name')
        row_params.organizations_for_select = organizations
        this.handlingInstance(row_params, this.parentData.client_path, route_name)
      },

      handlingOrganization(row_params, route_name) {
        let clients = this.getCollectionForSelect('client_table_data', 'fullname')
        row_params.clients_for_select = clients
        this.handlingInstance(row_params, this.parentData.organization_path, route_name)
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
      this.getCollection(this.parentData.client_path, 'client_table_data')
      this.getCollection(this.parentData.organization_path, 'organization_table_data')
      this.getCollection(this.parentData.path, 'staff_table_data')
      this.getCollection(this.parentData.equipment_path, 'equipment_table_data')
    }
  }
</script>


<style lang='scss'>
  li {
    font-size: 1em;
  }
</style>