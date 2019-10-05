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
  QSpinnerAudio,
  QTable,
  QTh,
  QTr,
  QTd,
  QDialog,
  ClosePopup,
  QCard,
  QCardSection,
  QCardActions,
  QBtnDropdown,
  QSelect
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
    QSpinnerAudio,
    QTable,
    QTh,
    QTr,
    QTd,
    QDialog,
    QCard,
    QCardSection,
    QCardActions,
    QBtnDropdown,
    QSelect
  },
  directives: {
    ClosePopup
  },
  plugins: {},
  iconSet: iconSet
})