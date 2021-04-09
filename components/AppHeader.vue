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
  data () {
    return {
      searchStart: false,
      searchStop: false,
      searchIndex: ''
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
