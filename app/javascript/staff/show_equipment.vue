<template lang='pug'>
  div
    p(v-html="params")
</template>

<script>

  export default {
    data: function () {
      console.log(this.$route.params)
      return {
        params: this.$route.params
      }
    },
    props: {},
    methods: {}
  }
</script>