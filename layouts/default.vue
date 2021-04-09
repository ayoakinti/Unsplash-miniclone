<template>
  <div class="page-wrapper">
    <AppHeader
      :reset-search-bar="resetSearchBar"
    />
    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    resetSearchBar () {
      return this.$store.state.resetSearchBar
    }
  }
}
</script>

<style lang="scss"></style>>
