<template lang='pug'>
  q-select(v-model="sortAll" :options="options" label="Sort by" class="sort-field")
</template>

<script>
  export default {
    data: function () {
      return {
        options: this.parentData.options
      }
    },
    props: {
      parentData: Object
    },
    computed: {
      sortAll: {
        get() {
          return this.$store.state.sort_all_option
        },
        set(value) {
          this.$store.commit('updateSortAllOption', value)
        }
      }
    }
  }
</script>

<style lang="scss">
  .sort-field {
    width: 300px;
    max-width: 80vw;
    float: right;
  }
</style>