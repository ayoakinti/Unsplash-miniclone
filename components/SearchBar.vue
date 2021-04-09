<template>
  <div>
    <Loader v-if="isLoading" />
    <form @submit.prevent="searchPhotos">
      <div class="form-group">
        <div class="form-icon">
          <IconSearch />
        </div>
        <input
          id="searchIndex"
          v-model="searchIndex"
          type="search"
          name="searchIndex"
          class="form-control"
          autocomplete="off"
          placeholder="Search for photo"
          required
        >
        <!-- <div class="search-options">
          <ul>
            <li><a href="#">Hello</a></li>
            <li><a href="#">Hello</a></li>
            <li><a href="#">Hello</a></li>
            <li><a href="#">Hello</a></li>
            <li><a href="#">Hello</a></li>
          </ul>
        </div> -->
      </div>
    </form>
  </div>
</template>

<script>
import IconSearch from './Icons/IconSearch'
export default {
  components: {
    IconSearch
  },
  data () {
    return {
      searchIndex: '',
      isLoading: false
    }
  },
  methods: {
    async searchPhotos () {
      this.isLoading = true
      this.$emit('search-started', this.searchIndex)

      try {
        await this.$store.dispatch('getPhotos', {
          query: this.searchIndex
        })
      } catch (error) {
        console.log(error.response.data)
      }
      this.isLoading = false
      this.$emit('search-stopped')
      this.searchIndex = ''
    }
  }
}
</script>
