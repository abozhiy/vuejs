<template lang='pug'>
  q-toolbar(class="navbar")
    q-toolbar-title
      img(class="logo" src='./images/logo.png')
    a(v-bind:href="parentData.path + '/sign_out'" data-method="delete")
      q-btn(label="Sign out" text-color="white")
</template>

<script>
  export default {
    data: function () {
      return {
        message: "Hello Navbar!"
      }
    },
    props: {
      parentData: Object
    },
    methods: {}
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
</style>
