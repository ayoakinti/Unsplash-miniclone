<template>
  <div class="search-progress-bar">
    <div class="d-flex align-items-center">
      <div v-if="!searchStop">
        Searching
      </div>
      <div v-else>
        Search Results
      </div>
      for <span>"{{ searchIndex }}"</span>
    </div>
    <div class="d-flex align-items-center cursor-pointer" @click="closeSearchProgressBar">
      <IconClose />
    </div>
  </div>
</template>

<script>
import IconClose from './Icons/IconClose'
export default {
  components: {
    IconClose
  },
  props: {
    searchIndex: {
      type: String,
      required: true
    },
    searchStop: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeSearchProgressBar () {
      this.$emit('close-search-progress-bar')
    }
  }
}
</script>

<style>
  .search-progress-bar svg path {
    fill: #1a4986;
  }
</style>
