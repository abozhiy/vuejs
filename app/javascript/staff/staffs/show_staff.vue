<template lang='pug'>
  p(v-html="params")
</template>

<script>

  export default {
    data: function () {
      return {
        params: this.$route.params
      }
    },
    props: {},
    methods: {}
  }
</script>