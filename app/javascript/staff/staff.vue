<template lang='pug'>
  div
    div(v-if="loading")
      div(class="window-height window-width row justify-center items-center" style="font-size: 3em")
        q-spinner-audio(color="secondary")

    q-layout(view="hHh lpR fFf")
      q-header
        navbar(:parentData="{path: path}")
      q-page-container
        router-view(:parentData="{message: message}")
      //q-drawer(show-if-above side="left" bordered)
</template>

<script>
  import Navbar from '../shared/navbar.vue'

  export default {
    data: function () {
      return {
        message:  "Hello staff!",
        path:     this.$store.state.staffs_path,
        loading:  true
      }
    },
    components: {
      Navbar
    },
    methods: {
    },
    mounted() {
      this.loading = false
    }
  }
</script>

<style lang='scss'>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>
