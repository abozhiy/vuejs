import Vue from 'vue'
import axios from "axios"

const adapter = axios.create({
  baseURL: '/api/v1',
  headers: {
    'Accept': 'application/json'
  }
})

const backend = {
  staffs: {
    index: (url, filter, sort) => adapter.get(url + '?filter=' + filter + '&sort=' + sort),
    show: (url, id) => adapter.get(url + '/' + id),
    create: (url, params) => adapter.post(url, params),
    update: (url, params) => adapter.patch(url, params),
    destroy: (url, id) => adapter.delete(url + '/' + id),
  }
}

// Vue.prototype.$staff_backend = backend

export {
  backend
}