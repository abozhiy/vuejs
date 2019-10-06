<template lang='pug'>

  div(class="q-pa-md")

    q-dialog(:value="true" @hide="hide")
      q-card(style="width: 500px; max-width: 80vw;")
        q-card-section
          div(class="text-h6") Edit staff

        q-card-section
          q-input(outlined v-model="staff.fullname" label="fullname")
          q-input(outlined v-model="staff.email" label="email")
          q-input(outlined v-model="staff.phone" label="phone")
          q-input(outlined v-model="staff.password" label="password")

        q-card-actions(align="right" class="q-pa-md bg-white text-teal")
          q-btn(outline v-close-popup="1" color="secondary" label="Edit" size='sm' @click="editStaff")


</template>


<script>
  import {backend} from '../api/index.js'

  export default {
    data: function () {
      let params = this.$route.params
      return {
        staff: {
          id: params.id,
          fullname: params.fullname,
          email: params.email,
          phone: params.phone,
          password: params.password
        }
      }
    },
    methods: {

      hide() {
        this.$router.push({ name: 'Staffs' })
      },

      editStaff() {
        let params = {
          id: this.staff.id,
          fullname: this.staff.fullname,
          email: this.staff.email,
          phone: this.staff.phone,
          password: this.staff.password
        }

        backend.staffs.update(this.$route.params.path+'/'+this.$route.params.id, params)
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.$emit('update-staff-list')
        })
      },
    }
  }
</script>