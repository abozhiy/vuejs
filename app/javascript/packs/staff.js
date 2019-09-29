import Rails from "../../../node_modules/rails-ujs"
Rails.start()

// import Vue from 'vue/dist/vue.esm'
import Staff from '../staff/staff.vue'

import Vue from 'vue'
import '../staff/quasar'


document.addEventListener('DOMContentLoaded', () => {
  let element = document.getElementById('staff_component')
  if (element != null) {
    new Vue({
      el: element,
      render: h => h(Staff)
    })
  }
})
