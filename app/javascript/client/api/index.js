import axios from "axios"
import Vue from "vue";

const adapter = axios.create({
  baseURL: '/api/v1',
  headers: {
    'Accept': 'application/json'
  }
})

const backend = {
  clients: {
    index: (url) => adapter.get(url),
    create: (url, params) => adapter.post(url, params),
    destroy: (url, id) => adapter.delete(url + '/' + id),
  }
}

// Vue.prototype.$client_backend = backend

export {
  backend
}