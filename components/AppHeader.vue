<template>
  <header>
    <div class="row w-100">
      <div class="col-md-10 mx-auto">
        <SearchBar
          @search-started="showSearchProgressBar"
          @search-stopped="searchStop = true"
        />
        <SearchProgressBar
          v-if="searchStart"
          :search-index="searchIndex"
          :search-stop="searchStop"
          @close-search-progress-bar="searchStart = false"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    resetSearchBar: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      searchStart: false,
      searchStop: false,
      searchIndex: ''
    }
  },
  watch: {
    resetSearchBar: {
      immediate: true,
      handler () {
        if (this.resetSearchBar) {
          this.searchStart = false
          this.$store.dispatch('toggleSearchProgressBar', {
            reset: false
          })
        }
      }

    }
  },
  methods: {
    showSearchProgressBar (searchIndex) {
      this.searchStart = true
      this.searchIndex = searchIndex
    }
  }
}
</script>

<style></style>
