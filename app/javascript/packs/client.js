import Rails from "../../../node_modules/rails-ujs"
Rails.start()

// import Vue from 'vue/dist/vue.esm'
// import '../quasar'
import Client from '../client/client.vue'


// Temporary solution ->
import Vue from 'vue'
import '../assets/styles/quasar.styl'
import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QInput,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QSpinnerAudio
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QInput,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QSpinnerAudio
  },
  directives: {},
  plugins: {},
  iconSet: iconSet
})
// <- Temporary solution


document.addEventListener('DOMContentLoaded', () => {
  let element = document.getElementById('client_component')
  if (element != null) {
    new Vue({
      el: element,
      render: h => h(Client)
    })
  }
})
