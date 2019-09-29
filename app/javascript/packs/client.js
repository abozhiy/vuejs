import Rails from "../../../node_modules/rails-ujs"
Rails.start()

// import Vue from 'vue/dist/vue.esm'
import Client from '../client/client.vue'

import Vue from 'vue'
import '../quasar'


document.addEventListener('DOMContentLoaded', () => {
  let element = document.getElementById('client_component')
  if (element != null) {
    new Vue({
      el: element,
      render: h => h(Client)
    })
  }
})
