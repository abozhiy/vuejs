import Vue from 'vue/dist/vue.esm'
import Client from '../client/client.vue'

document.addEventListener('DOMContentLoaded', () => {
  let element = document.getElementById('client_component')
  if (element != null) {
    new Vue({
      el: element,
      render: h => h(Client)
    })
  }
})
