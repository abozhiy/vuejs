import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Dashboard from "../dashboard";

export default new VueRouter({
  mode: 'history',
  hashbang: false,
  routes: [
    { path: '/staff/staffs', redirect: '/staff/dashboard' },
    {
      name: 'Dashboard',
      path: '/staff/dashboard',
      component: Dashboard,
      children: [
        {
          name: 'addOrganization',
          path: '/staff/organizations/new',
          components: {
            add_organization: () => import('../add_organization')
          }
        },
        {
          name: 'addClient',
          path: '/staff/clients/new',
          components: {
            add_client: () => import('../add_client')
          }
        },
        {
          name: 'addStaff',
          path: '/staff/staffs/new',
          components: {
            add_staff: () => import('../add_staff')
          }
        },
        {
          name: 'editOrganization',
          path: '/staff/organizations/:id/edit',
          components: {
            edit_organization: () => import('../edit_organization')
          }
        },
        {
          name: 'editClient',
          path: '/staff/clients/:id/edit',
          components: {
            edit_client: () => import('../edit_client')
          }
        },
        {
          name: 'editStaff',
          path: '/staff/staffs/:id/edit',
          components: {
            edit_staff: () => import('../edit_staff')
          }
        }
      ]
    },
    {
      name: 'showOrganization',
      path: '/staff/organizations/:id',
      component: () => import('../show_organization')
    },
    {
      name: 'showClient',
      path: '/staff/clients/:id',
      component: () => import('../show_client')
    },
    {
      name: 'showStaff',
      path: '/staff/staffs/:id',
      component: () => import('../show_staff')
    }
  ]
})