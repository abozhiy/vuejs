<template lang='pug'>
  div(class="q-pa-md")

    q-dialog(:value="true" @hide="hide")
      q-card(style="width: 500px; max-width: 80vw;")
        q-card-section
          div(class="text-h6") Add staff

        q-card-section
          q-input(outlined v-model="staff.fullname" label="fullname")
          q-input(outlined v-model="staff.email" label="email")
          q-input(outlined v-model="staff.phone" label="phone")
          q-input(outlined v-model="staff.password" label="password")

        q-card-actions(align="right" class="q-pa-md bg-white text-teal")
          q-btn(outline v-close-popup="1" color="secondary" label="Add" size='sm' @click="checkValidate")

</template>


<script>
  import {backend} from '../api/index.js'

  export default {
    data: function () {
      return {
        staff: {
            fullname: '',
            email: '',
            phone: '',
            password: ''
        }
      }
    },
    props: {
      parentData: Object
    },
    methods: {

      hide() {
        this.$router.push({ name: 'Staffs' })
      },

      checkFullname(fullname) {
          return fullname.length > 0 && fullname.length < 5;
      },
      checkEmail(email) {
          let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return regex.test(String(email).toLowerCase());
      },
      checkPhone(phone) {
          let regex = /^\d+$/;
          return regex.test(String(phone));
      },
      checkPassword(password) {
          return password.length >= 4;
      },


      checkValidate() {
        let params = {
            fullname: this.staff.fullname,
            email: this.staff.email,
            phone: this.staff.phone,
            password: this.staff.password
        }

        if (!this.checkFullname(params.fullname)) {
            alert('Fullname field must not contain more than 5 characters')
        } else if (!this.checkEmail(params.email)) {
            alert('Email must be in the form test@test.com')
        } else if (!this.checkPhone(params.phone)) {
            alert('Phone must contain only numbers')
        } else if (!this.checkPassword(params.password)) {
            alert('Password must contain at least 4 characters')
        } else {
            this.addStaff(params)
        }
      },

      addStaff(params) {
        backend.staffs.create(this.$route.params.path, params)
        .then((response) => {
            // console.log(response)
            this.staff.fullname = ''
            this.staff.email = ''
            this.staff.phone = ''
            this.staff.password = ''
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
          this.$emit('update-staff-list')
        })
      }
    }
  }
</script>