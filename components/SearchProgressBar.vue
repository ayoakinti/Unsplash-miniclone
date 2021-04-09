<template>
  <div class="search-progress-bar" @click="closeSearchProgressBar">
    <div v-if="!searchStop">
      Searching
    </div>
    <div v-else>
      Search Results
    </div>
    for <span>"{{ searchIndex }}"</span>
  </div>
</template>

<script>
export default {
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
