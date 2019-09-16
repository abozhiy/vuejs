import axios from "axios"

export default {

  // signOut(path) {
  //   axios.delete(path)
  //   .then((response) => {
  //     console.log(response)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  //   .finally((response) => {
  //     console.log('aaaa')
  //   });
  // }

  addNewInstance(path, params) {
    return axios.post(path, params)
  },

  getCollection(path) {
    return axios.get(path)
  }
}