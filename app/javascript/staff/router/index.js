import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Dashboard from "../dashboard";

export default new VueRouter({
  mode: 'history',
  hashbang: false,
  routes: [
    { path: '/staff/staffs/dashboard', redirect: '/staff/dashboard' },
    {
      name: 'Dashboard',
      path: '/staff/dashboard',
      component: Dashboard
    },
    {
      name: 'Organizations',
      path: '/staff/organizations',
      component: () => import('../organizations/organizations'),
      children: [
        {
          name: 'addOrganization',
          path: '/staff/organizations/new',
          components: {
            add_organization: () => import('../organizations/add_organization')
          }
        },
        {
          name: 'editOrganization',
          path: '/staff/organizations/:id/edit',
          components: {
            edit_organization: () => import('../organizations/edit_organization')
          }
        }
      ]
    },
    {
      name: 'Clients',
      path: '/staff/clients',
      component: () => import('../clients/clients'),
      children: [
        {
          name: 'addClient',
          path: '/staff/clients/new',
          components: {
            add_client: () => import('../clients/add_client')
          }
        },
        {
          name: 'editClient',
          path: '/staff/clients/:id/edit',
          components: {
            edit_client: () => import('../clients/edit_client')
          }
        }
      ]
    },
    {
      name: 'Staffs',
      path: '/staff/staffs',
      component: () => import('../staffs/staffs'),
      children: [
        {
          name: 'addStaff',
          path: '/staff/staffs/new',
          components: {
            add_staff: () => import('../staffs/add_staff')
          }
        },
        {
          name: 'editStaff',
          path: '/staff/staffs/:id/edit',
          components: {
            edit_staff: () => import('../staffs/edit_staff')
          }
        }
      ]
    },
    {
      name: 'Equipments',
      path: '/staff/equipments',
      component: () => import('../equipments/equipments'),
      children: [
        {
          name: 'addEquipment',
          path: '/staff/equipments/new',
          components: {
            add_equipment: () => import('../equipments/add_equipment')
          }
        },
        {
          name: 'editEquipment',
          path: '/staff/equipments/:id/edit',
          components: {
            edit_equipment: () => import('../equipments/edit_equipment')
          }
        }
      ]
    },
    {
      name: 'showOrganization',
      path: '/staff/organizations/:id',
      component: () => import('../organizations/show_organization')
    },
    {
      name: 'showEquipment',
      path: '/staff/equipments/:id',
      component: () => import('../equipments/show_equipment')
    },
    {
      name: 'showClient',
      path: '/staff/clients/:id',
      component: () => import('../clients/show_client')
    },
    {
      name: 'showStaff',
      path: '/staff/staffs/:id',
      component: () => import('../staffs/show_staff')
    }
  ]
})