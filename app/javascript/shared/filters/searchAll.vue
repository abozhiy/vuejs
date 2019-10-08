<template lang='pug'>
  q-input(v-model="searchAll" label="Search" class="search-field")
</template>

<script>
  export default {
    computed: {
      searchAll: {
        get() {
          return this.$store.state.search_all_filter
        },
        set(value) {
          this.$store.commit('updateSearchAllFilter', value)
        }
      }
    }
  }
</script>

<style lang="scss">
  .search-field {
    width: 300px;
    max-width: 80vw;
    float: right;
  }
</style>