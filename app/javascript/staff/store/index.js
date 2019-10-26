import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search_all_filter: '',
    sort_all_option: '',
    staffs_path: '/staff/staffs',
    clients_path: '/client/clients',
    organizations_path: '/organizations',
    equipments_path: '/equipments',
    org_table: {
      columns: [
        {name: 'id', label: 'Id', field: 'id', sortable: true},
        {name: 'name', label: 'Name', field: 'name', sortable: true},
        {name: 'org_type', label: 'Type', field: 'org_type', sortable: true},
        {name: 'inn', label: 'INN', field: 'inn', sortable: true},
        {name: 'ogrn', label: 'OGRN', field: 'ogrn', sortable: true},
        {name: 'client_ids', label: 'Client_ids', field: 'client_ids', sortable: true},
        {name: 'action', label: '', field: 'action'}
      ],
      data: [],
      pagination: {
        sortBy: '',
        descending: false,
        page: 1,
        rowsPerPage: 5,
        rowsNumber: 0
      },
    },
    equipment_columns: [
      {name: 'id', label: 'Id', field: 'id', sortable: true},
      {name: 'title', label: 'Title', field: 'title', sortable: true},
      {name: 'equipment_type', label: 'Type', field: 'equipment_type', sortable: true},
      {name: 'serial_num', label: 'Serial №', field: 'serial_num', sortable: true},
      {name: 'organization_id', label: 'Organization id', field: 'organization_id', sortable: true},
      {name: 'action', label: '', field: 'action'}
    ],
    client_columns: [
      {name: 'id', label: 'Id', field: 'id', sortable: true},
      {name: 'fullname', label: 'Fullname', field: 'fullname', sortable: true},
      {name: 'email', label: 'Email', field: 'email', sortable: true},
      {name: 'phone', label: 'Phone', field: 'phone', sortable: true},
      {name: 'organization_ids', label: 'Organization_ids', field: 'organization_ids', sortable: true},
      {name: 'action', label: '', field: 'action'}
    ],
    staff_columns: [
      {name: 'id', label: 'Id', field: 'id', sortable: true},
      {name: 'fullname', label: 'Fullname', field: 'fullname', sortable: true},
      {name: 'email', label: 'Email', field: 'email', sortable: true},
      {name: 'phone', label: 'Phone', field: 'phone', sortable: true},
      {name: 'action', label: '', field: 'action'}
    ]
  },
  mutations: {
    updateSearchAllFilter(state, value) {
      state.search_all_filter = value
    },

    updateOrganizationTablePagination(state, data) {
      state.org_table = data
    }
  },
  actions: {},
  modules: {},
  // plugins: [createPersistedState()]
})