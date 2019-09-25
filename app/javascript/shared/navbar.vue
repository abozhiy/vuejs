<template lang='pug'>
    <div class="navbar">
        <img class="logo" src='~images/logo.png' />
        <a v-bind:href="parentData.path + '/sign_out'" data-method="delete">
            <button id='sign_out_button'>Sign out</button>
        </a>
        <!--<button @click="SignOut">Выход</button>-->
    </div>
</template>

<script>
    // import backend from "../api/index"
    // import axios from "axios"
    // import VueRouter from 'vue-router';

    export default {
        data: function () {
          return {
            message: "Hello Navbar!"
          }
        },
        props: {
            parentData: Object
        },
        methods: {
          // SignOut() {
          //   // let path = '/staff/staffs/sign_out'
          //   // backend.signOut(path)
          //
          //   let sign_out_path = this.parentData.path + '/sign_out'
          //
          //   axios.delete(sign_out_path)
          //       .then((response) => {
          //           console.log(response)
          //       })
          //       .catch((error) => {
          //           console.log(error)
          //       })
          //       .finally(() => {
          //         // VueRouter.push({ path: '/' })
          //       });
          // }
        }
    }
</script>

<style lang='scss'>
    .navbar {
        background-color: lightgrey;
        z-index: 3;
    }
    .logo {
        width: 80px;
        margin-top: 4px;
        margin-left: 4px;
    }
    button#sign_out_button {
        float: right;
        margin-right: 15px;
        margin-top: 15px;
    }
</style>
