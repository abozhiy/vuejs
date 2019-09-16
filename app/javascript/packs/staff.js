import Vue from 'vue/dist/vue.esm'
import Staff from '../staff/staff.vue'

document.addEventListener('DOMContentLoaded', () => {
  let element = document.getElementById('staff_component')
  if (element != null) {
    new Vue({
      el: element,
      render: h => h(Staff)
    })
  }
})
